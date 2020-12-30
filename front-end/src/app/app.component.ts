import { Component, ViewChild, OnInit } from '@angular/core';
import { PerfilUsuario } from './enum/perfil-usuario.enum';
import { TokenStorageService } from './service/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../bootstrap.css']
})
export class AppComponent implements OnInit {


  title: string = 'Cuidado Cristão';
  isLoggedIn: boolean = false;
  showAdminBoard: boolean = false;
  showModeratorBoard: boolean = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      let role = user.perfil;

      this.showAdminBoard = role===PerfilUsuario.ADMIN;
      this.showModeratorBoard = true;

      this.username = user.nome;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
