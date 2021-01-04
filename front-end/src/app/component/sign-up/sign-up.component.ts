import { Component, OnInit } from '@angular/core';
import { PerfilUsuario } from 'src/app/enum/perfil-usuario.enum';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css','../../../bootstrap.css']
})
export class SignUpComponent implements OnInit {

  public user: User;
  isLoggedIn: boolean;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      this.user = <User>{nome:'',email:'',gravatarUrl:'',senha:'', confirmaSenha: ''};
    }
  }

  onSubmit(): void {

    this.user.dataCadastro = new Date();
    this.user.perfil = PerfilUsuario.USER;
    this.user.validationStatus = 'PENDING';
    this.user.gravatarUrl = 'assets/img/default-logo.png';
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
