import { Component, ViewChild, OnInit } from '@angular/core';
import { PerfilUsuario } from './enum/perfil-usuario.enum';
import { AuthService } from './service/auth.service';
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

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.showAdminBoard = this.authService.isAdmin(user);
      this.showModeratorBoard = this.authService.isModerator(user);

      this.username = user.nome;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
