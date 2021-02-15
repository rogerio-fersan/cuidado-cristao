import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../bootstrap.css']
})
export class HomeComponent implements OnInit {

 content: string;

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getUser()) {
      this.router.navigateByUrl('/dashboard')
    } else {
      this.router.navigateByUrl('/sign-in')
    }
  }
}
