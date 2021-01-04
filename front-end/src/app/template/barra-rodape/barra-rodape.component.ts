import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interface/info';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-barra-rodape',
  templateUrl: './barra-rodape.component.html',
  styleUrls: ['./barra-rodape.component.css', '../../../bootstrap.css']
})
export class BarraRodapeComponent implements OnInit {

  public info: Info = <Info>{};

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.get().subscribe(response => {
      this.info = response;
    },
      erro => {
        console.log(`Problema na requisicao da Info do App: ${erro}`);
        this.info = {
  "version": "N/D",
  "appName": "Cuidado Cristão",
  "nomeIgreja": "-- Erro de conexao com servidor --",
  "enderecoIgreja": "",
  "emailIgreja": "",
  "telefoneIgreja": "",
  "pastorTitular": ""
        };
    });
  }

}
