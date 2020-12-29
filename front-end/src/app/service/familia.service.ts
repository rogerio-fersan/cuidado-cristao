import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Familia } from '../interface/Familia';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

  constructor(private http: HttpClient) { }

  get(_id:string): Observable<Familia> {
    const url = `${environment.apiUrl}/${_id}`;
    return this.http.get<Familia>(url);
  }
  delete(_id:string): Observable<Familia> {
    const url = `${environment.apiUrl}/${_id}`;
    return this.http.delete<Familia>(url);
  }
  put(familia:Familia): Observable<Familia> {
    const url = `${environment.apiUrl}/familia/`;
    return this.http.put<Familia>(url,familia);
  }
  post(familia:Familia): Observable<Familia> {
    const url = `${environment.apiUrl}/familia/`;
    return this.http.post<Familia>(url,familia);
  }
  getAll(): Observable<Familia[]> {
    const url = `${environment.apiUrl}/familia/list`;
    return this.http.get<Familia[]>(url);
  }
}
