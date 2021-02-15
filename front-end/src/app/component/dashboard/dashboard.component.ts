import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','../../../bootstrap.css']
})
export class DashboardComponent implements OnInit {
  public users: number;
  public congregados: number;
  public pedidosOracao: number;
  public celulas: number;
  public grupos: number;
  public familias: number;
  public classesEscolaBiblica: number;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.count();
    this.users = 0;
    this.congregados = 0;
    this.pedidosOracao = 0;
    this.celulas = 0;
    this.grupos = 0;
    this.familias = 0;
    this.classesEscolaBiblica = 0;
  }

}
