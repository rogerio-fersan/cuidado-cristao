import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Celula } from '../interface/celula';

@Injectable({
  providedIn: 'root'
})
export class CelulaService {

  constructor(private http: HttpClient) { }

  get(_id:string): Observable<Celula> {
    const url = `${environment.apiUrl}/celula/${_id}`;
    return this.http.get<Celula>(url);
  }
  delete(_id:string): Observable<Celula> {
    const url = `${environment.apiUrl}/celula/${_id}`;
    return this.http.delete<Celula>(url);
  }
  put(celula:Celula): Observable<Celula> {
    const url = `${environment.apiUrl}/celula/`;
    return this.http.put<Celula>(url,celula);
  }
  post(celula:Celula): Observable<Celula> {
    const url = `${environment.apiUrl}/celula/`;
    return this.http.post<Celula>(url,celula);
  }
  getAll(): Observable<Celula[]> {
    const url = `${environment.apiUrl}/celula/list`;
    return this.http.get<Celula[]>(url);
  }
}
