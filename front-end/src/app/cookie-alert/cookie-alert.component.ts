import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-alert',
  templateUrl: './cookie-alert.component.html',
  styleUrls: ['./cookie-alert.component.css','../../bootstrap.css']
})
export class CookieAlertComponent implements OnInit {

  public visible = false;
  public classe = 'cookie-alert';
  public mouse = { x: 10, y: 10 };

  alteraPosicaoDaTooltip(x: number, y: number) {
    this.mouse = { x, y };
  }

  exibeTooltip() {
    this.visible = true;
  }

  escondeTooltip() {
    this.visible = false;
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true
    }, 5);
  }
}
