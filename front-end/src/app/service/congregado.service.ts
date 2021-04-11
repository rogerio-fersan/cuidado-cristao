import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Congregado } from '../interface/congregado';

@Injectable({
  providedIn: 'root'
})
export class CongregadoService {

  constructor(private http: HttpClient) { }

  get(_id:string): Observable<Congregado> {
    const url = `${environment.apiUrl}/api/congregados/${_id}`;
    return this.http.get<Congregado>(url);
  }
  getByUserId(_id:string): Observable<Congregado> {
    const url = `${environment.apiUrl}/api/congregados/by-user-id/${_id}`;
    return this.http.get<Congregado>(url);
  }
  delete(_id:string): Observable<Congregado> {
    const url = `${environment.apiUrl}/api/congregados/${_id}`;
    return this.http.delete<Congregado>(url);
  }
  put(congregado:Congregado): Observable<Congregado> {
    const url = `${environment.apiUrl}/api/congregados/`;
    return this.http.put<Congregado>(url,congregado);
  }
  post(congregado:Congregado): Observable<Congregado> {
    const url = `${environment.apiUrl}/api/congregados/`;
    return this.http.post<Congregado>(url,congregado);
  }
  getAll(): Observable<Congregado[]> {
    const url = `${environment.apiUrl}/api/congregados/list`;
    return this.http.get<Congregado[]>(url);
  }
}
