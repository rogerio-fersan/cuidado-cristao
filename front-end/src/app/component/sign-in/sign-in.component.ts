import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css','../../../bootstrap.css']
})
export class SignInComponent implements OnInit {

  public user: User;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.user = {} as User;
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
      if (!this.user.gravatarUrl) {
        this.user.gravatarUrl = 'assets/img/default-logo.png';
      }
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  onSubmit(): void {
    this.authService.login(this.user).subscribe(
      data => {
        this.tokenStorage.saveToken(data.validationToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
