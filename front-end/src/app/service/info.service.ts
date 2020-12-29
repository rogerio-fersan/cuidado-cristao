import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from 'src/app/interface/info';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

   constructor(private http: HttpClient) { }

  get(): Observable<Info> {
    const url = `${environment.apiUrl}/api/info`;
    return this.http.get<Info>(url);
  }


}
