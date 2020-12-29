import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Grupo } from '../interface/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  get(_id:string): Observable<Grupo> {
    const url = `${environment.apiUrl}/grupo/${_id}`;
    return this.http.get<Grupo>(url);
  }
  delete(_id:string): Observable<Grupo> {
    const url = `${environment.apiUrl}/grupo/${_id}`;
    return this.http.delete<Grupo>(url);
  }
  put(grupo:Grupo): Observable<Grupo> {
    const url = `${environment.apiUrl}/grupo/`;
    return this.http.put<Grupo>(url,grupo);
  }
  post(grupo:Grupo): Observable<Grupo> {
    const url = `${environment.apiUrl}/grupo/`;
    return this.http.post<Grupo>(url,grupo);
  }
  getAll(): Observable<Grupo[]> {
    const url = `${environment.apiUrl}/grupo/list`;
    return this.http.get<Grupo[]>(url);
  }
}
