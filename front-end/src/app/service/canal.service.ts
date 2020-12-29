import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Canal } from '../interface/canal';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  constructor(private http: HttpClient) { }

  get(_id:string): Observable<Canal> {
    const url = `${environment.apiUrl}/canal/${_id}`;
    return this.http.get<Canal>(url);
  }
  delete(_id:string): Observable<Canal> {
    const url = `${environment.apiUrl}/canal/${_id}`;
    return this.http.delete<Canal>(url);
  }
  put(canal:Canal): Observable<Canal> {
    const url = `${environment.apiUrl}/canal/`;
    return this.http.put<Canal>(url,canal);
  }
  post(canal:Canal): Observable<Canal> {
    const url = `${environment.apiUrl}/canal/`;
    return this.http.post<Canal>(url,canal);
  }
  getAll(): Observable<Canal[]> {
    const url = `${environment.apiUrl}/canal/list`;
    return this.http.get<Canal[]>(url);
  }
}
