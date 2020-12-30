import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(AUTH_API + 'signin',  {
      nome: user.nome,
      senha: user.senha
    } , httpOptions);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(AUTH_API + 'signup', user, httpOptions);
  }
}
