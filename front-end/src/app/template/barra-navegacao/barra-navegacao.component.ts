import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css','../../../bootstrap.css']
})
export class BarraNavegacaoComponent implements OnInit {

  public appName = 'Cuidado Cristão' //TODO - Modificar para obter o nome a partir do backend


  constructor() { }

  ngOnInit() {
  }



}
