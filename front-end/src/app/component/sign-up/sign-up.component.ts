import { Component, OnInit } from '@angular/core';
import { PerfilUsuario } from 'src/app/enum/perfil-usuario.enum';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css','../../../bootstrap.css']
})
export class SignUpComponent implements OnInit {

  public user: User;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.user.dataCadastro = new Date();
    this.user.perfil = PerfilUsuario.USER;
    this.user.validationStatus = 'PENDING';
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
