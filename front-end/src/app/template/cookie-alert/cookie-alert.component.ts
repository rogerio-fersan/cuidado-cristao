import { Component, OnInit } from '@angular/core';
import { FirstAlertService } from '../../service/first-alert.service';

@Component({
  selector: 'app-cookie-alert',
  templateUrl: './cookie-alert.component.html',
  styleUrls: ['./cookie-alert.component.css','../../../bootstrap.css']
})
export class CookieAlertComponent implements OnInit {

  constructor(private firstAlertService: FirstAlertService) {}

  public visible = false;
  public classe = 'cookie-alert';
  public mouse = { x: 50, y: 100 };
  public zIndex = 500;

  alteraPosicaoDaTooltip(x: number, y: number) {
    this.mouse = this.firstAlertService.mouse = { x, y };
  }

  escondeTooltip() {
    this.visible = this.firstAlertService.visible = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = this.firstAlertService.visible
    }, 5);
  }
}
