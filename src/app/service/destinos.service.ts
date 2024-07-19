import { PutDestinosComponent } from './../components/put-destinos/put-destinos.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASIC_URL = ["http://localhost:8080"]


@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  private uri: string = '/cg-erp/transporte/destino';

  constructor(private http:HttpClient) { }

  postDestinos(destinos: any): Observable<any>{
    return this.http.post(BASIC_URL+this.uri+"/addNovoDestino", destinos);
  }

  getDestinos(): Observable<any>{
    return this.http.get(BASIC_URL+this.uri+"/listarDestinos");
  }

  getDestinoById(idDestino: number): Observable<any> {
    return this.http.get(BASIC_URL+this.uri+"/consultar/" + idDestino)
  }

  putDestino(destinos: any, idDestino:number): Observable<any>{
    return this.http.put(BASIC_URL+this.uri+"/editar", idDestino);
  }

  deleteDestino(idDestino: number): Observable<any> {
    return this.http.delete(BASIC_URL+this.uri+"/excluir/" + idDestino)
  }
}

