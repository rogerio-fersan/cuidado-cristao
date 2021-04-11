import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PosicaoCongregado } from 'src/app/enum/posicao-congregado.enum';
import { Celula } from 'src/app/interface/celula';
import { ClasseEscolaBiblica } from 'src/app/interface/classe-escola-biblica';
import { Congregado } from 'src/app/interface/congregado';
import { Estagio } from 'src/app/interface/estagio';
import { Familia } from 'src/app/interface/familia';
import { Grupo } from 'src/app/interface/grupo';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';
import { CongregadoService } from 'src/app/service/congregado.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-edit-congregado',
  templateUrl: './edit-congregado.component.html',
  styleUrls: ['./edit-congregado.component.css']
})
export class EditCongregadoComponent implements OnInit {

  public form: NgForm;

  public mensagem: string;
  public instance: Congregado;
  public familias: Familia[];
  public posicoes: PosicaoCongregado[];
  public celulas: Celula[];
  public grupos: Grupo[];
  public estagios: Estagio[];
  public responsaveis: User[];
  public escolas: ClasseEscolaBiblica[];
  public parameter: string;

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private activatedRoute: ActivatedRoute,
    private congregadoService: CongregadoService
  ) {
    this.activatedRoute.url.subscribe(data => {
      this.parameter = (data[1].path);
    }, erro => {
      this.parameter = ''
    })
  }

  ngOnInit(): void {
    this.mensagem = '';
    this.instance = {} as Congregado;
    this.instance.user_id = this.tokenStorageService.getUser()._id;
    this.instance.email = this.tokenStorageService.getUser().email;
    if (this.parameter!=='*') {
      this.congregadoService.get(this.parameter).subscribe(data => {
        this.instance = data;
      },
      erro=>{
        this.mensagem = `Erro na tentativa de montar os dados`
      })
    } else {
      this.congregadoService.getByUserId(this.tokenStorageService.getUser()._id).subscribe(data => {
        this.instance = data;
      },
      erro=>{
        this.mensagem = `Erro na tentativa de montar os dados`
      })
    };

    this.familias = [];
    this.posicoes = [PosicaoCongregado.ACOLHIDO, PosicaoCongregado.BISNETO, PosicaoCongregado.FILHO, PosicaoCongregado.MATRIARCA, PosicaoCongregado.NETO, PosicaoCongregado.PATRIARCA];
    this.celulas = [];
    this.grupos = [];
    this.estagios = [];
  }

  onSubmit(): void {
    if (this.instance._id) {
      this.congregadoService.put(this.instance).subscribe(data => {
        this.mensagem = `Dados do(a) Congregado(a) ${data.nomeCompleto} atualizados com sucesso`

      },
      erro=>{
        this.mensagem= `Desculpe, mas algo deu errado. Tente novamente`
      })
    }else{
      this.congregadoService.post(this.instance).subscribe(data=>{
        this.mensagem= `Dados do(a) Congregado(a) ${data.nomeCompleto} salvos com sucesso`
      }, erro=>{
        this.mensagem = `Desculpe, mas algo de errado. Tente novamente`
      })

    }
  }

  isAdmin(): boolean {
    return this.authService.isAdmin(this.tokenStorageService.getUser());

  }

  isOwner(): boolean {
    if (this.tokenStorageService.getUser()) {
      return false;
    }
    return this.tokenStorageService.getUser().congregado_id === this.instance._id;
  }

}
