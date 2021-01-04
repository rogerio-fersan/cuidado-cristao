import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { PerfilUsuario } from '../enum/perfil-usuario.enum';
import {environment} from '../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {  }

  login(user: User): Observable<User> {
    const url = `${environment.apiUrl}/api/auth/`;
    return this.http.post<User>(url + 'signin',  {
      nome: user.nome,
      senha: user.senha
    } , httpOptions);
  }

  register(user: User): Observable<User> {
    const url = `${environment.apiUrl}/api/auth/`;
    return this.http.post<User>(url + 'signup', user, httpOptions);
  }

  isAdmin(user: User): boolean {
    return user.perfil === PerfilUsuario.ADMIN;
  }
  isModerator(user: User): boolean {
    return user.perfil === PerfilUsuario.MODERATOR;
  }
  isUser(user: User): boolean {
    return user.perfil === PerfilUsuario.USER;
  }
}
