import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { ClasseEscolaBiblica } from '../interface/classe-escola-biblica';

@Injectable({
  providedIn: 'root'
})
export class ClasseEscolaBiblicaService {

  constructor(private http: HttpClient) { }

  get(_id:string): Observable<ClasseEscolaBiblica> {
    const url = `${environment.apiUrl}/classe-escola-biblica/${_id}`;
    return this.http.get<ClasseEscolaBiblica>(url);
  }
  delete(_id:string): Observable<ClasseEscolaBiblica> {
    const url = `${environment.apiUrl}/classe-escola-biblica/${_id}`;
    return this.http.delete<ClasseEscolaBiblica>(url);
  }
  put(classeEscolaBiblica:ClasseEscolaBiblica): Observable<ClasseEscolaBiblica> {
    const url = `${environment.apiUrl}/classe-escola-biblica/`;
    return this.http.put<ClasseEscolaBiblica>(url,classeEscolaBiblica);
  }
  post(classeEscolaBiblica:ClasseEscolaBiblica): Observable<ClasseEscolaBiblica> {
    const url = `${environment.apiUrl}/classe-escola-biblica/`;
    return this.http.post<ClasseEscolaBiblica>(url,classeEscolaBiblica);
  }
  getAll(): Observable<ClasseEscolaBiblica[]> {
    const url = `${environment.apiUrl}/classe-escola-biblica/list`;
    return this.http.get<ClasseEscolaBiblica[]>(url);
  }
}
