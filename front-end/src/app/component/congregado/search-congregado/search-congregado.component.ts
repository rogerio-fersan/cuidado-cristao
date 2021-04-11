import { Component, OnInit } from '@angular/core';
import { Congregado } from 'src/app/interface/congregado';
import { AuthService } from 'src/app/service/auth.service';
import { CongregadoService } from 'src/app/service/congregado.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-search-congregado',
  templateUrl: './search-congregado.component.html',
  styleUrls: ['./search-congregado.component.css','../../../../bootstrap.css']
})
export class SearchCongregadoComponent implements OnInit {

  public congregados: Congregado[];
  public mensagem: string;
  constructor(private congregadoService: CongregadoService, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.mensagem = '';
    this.congregadoService.getAll().subscribe(data=>{
      this.congregados = data
    },
    erro=>{
      this.mensagem = `Erro na tentativa de obter lista de Congregados`
    })
  }

  isAdmin(): boolean {
    return this.authService.isAdmin(this.tokenStorage.getUser());
  }
}
