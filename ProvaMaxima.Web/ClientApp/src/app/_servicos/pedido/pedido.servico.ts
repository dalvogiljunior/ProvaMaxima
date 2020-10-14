import { Injectable, inject, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../../_modelos/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoServico {
  private _baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public obtenhaListaDePedidos(): Observable<Pedido[]> {

    return this.http.get<Pedido[]>(this._baseUrl + "api/pedido")
  }
}
