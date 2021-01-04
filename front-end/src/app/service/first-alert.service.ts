import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstAlertService {
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

  constructor() {
      this.visible = true
  }

}
