import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { PedidoOracao } from '../interface/pedido-oracao';

@Injectable({
  providedIn: 'root'
})
export class PedidoOracaoService {

  constructor(private http: HttpClient) { }

  get(_id:string): Observable<PedidoOracao> {
    const url = `${environment.apiUrl}/pedido-oracao/${_id}`;
    return this.http.get<PedidoOracao>(url);
  }
  delete(_id:string): Observable<PedidoOracao> {
    const url = `${environment.apiUrl}/pedido-oracao/${_id}`;
    return this.http.delete<PedidoOracao>(url);
  }
  put(pedidoOracao:PedidoOracao): Observable<PedidoOracao> {
    const url = `${environment.apiUrl}/pedido-oracao/`;
    return this.http.put<PedidoOracao>(url,pedidoOracao);
  }
  post(pedidoOracao:PedidoOracao): Observable<PedidoOracao> {
    const url = `${environment.apiUrl}/pedido-oracao/`;
    return this.http.post<PedidoOracao>(url,pedidoOracao);
  }
  getAll(): Observable<PedidoOracao[]> {
    const url = `${environment.apiUrl}/pedido-oracao/list`;
    return this.http.get<PedidoOracao[]>(url);
  }
}
