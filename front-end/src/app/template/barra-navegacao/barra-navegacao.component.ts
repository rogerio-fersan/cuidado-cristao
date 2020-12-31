import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css','../../../bootstrap.css']
})
export class BarraNavegacaoComponent implements OnInit {

  public appName = 'Cuidado Cristão' //TODO - Modificar para obter o nome a partir do backend


  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.tokenStorage.getUser() ? true : false;
  }
}