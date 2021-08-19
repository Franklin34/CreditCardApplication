import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaCredito } from '../models/tarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  
  myAppUrl = 'https://localhost:44335/';
  myApiUrl = 'api/CreditCard/';

  constructor(private http: HttpClient) {

  }

  guuardarTarjeta(tarjeta:TarjetaCredito) : Observable<TarjetaCredito> {
    return this.http.post<TarjetaCredito>(this.myAppUrl + this.myApiUrl,tarjeta);
  }
}
