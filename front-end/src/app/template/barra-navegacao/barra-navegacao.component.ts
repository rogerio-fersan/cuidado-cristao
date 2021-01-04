import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css','../../../bootstrap.css']
})
export class BarraNavegacaoComponent implements OnInit {

  public appName: string;


  constructor(private tokenStorage: TokenStorageService, private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.get().subscribe(info => {
      this.appName = info.appName;
    },
      err => {
        this.appName = 'Cuidado Cristão';
    })
  }

  isLoggedIn() {
    return this.tokenStorage.getUser() ? true : false;
  }
}
