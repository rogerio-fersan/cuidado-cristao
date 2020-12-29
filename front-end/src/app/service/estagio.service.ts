import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Estagio } from '../interface/estagio';

@Injectable({
  providedIn: 'root'
})
export class estagioService {

  constructor(private http: HttpClient) { }

  get(_id:string): Observable<Estagio> {
    const url = `${environment.apiUrl}/estagio/${_id}`;
    return this.http.get<Estagio>(url);
  }
  delete(_id:string): Observable<Estagio> {
    const url = `${environment.apiUrl}/estagio/${_id}`;
    return this.http.delete<Estagio>(url);
  }
  put(estagio:Estagio): Observable<Estagio> {
    const url = `${environment.apiUrl}/estagio/`;
    return this.http.put<Estagio>(url,estagio);
  }
  post(estagio:Estagio): Observable<Estagio> {
    const url = `${environment.apiUrl}/estagio/`;
    return this.http.post<Estagio>(url,estagio);
  }
  getAll(): Observable<Estagio[]> {
    const url = `${environment.apiUrl}/estagio/list`;
    return this.http.get<Estagio[]>(url);
  }
}
