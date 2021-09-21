import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  myAppUrl = 'https://localhost:44335/';
  myApiUrl = 'api/Files/';

  constructor(private http: HttpClient) { }

  saveFile(file:Invoice) : Observable<Invoice> {
    return this.http.post<Invoice>(this.myAppUrl + this.myApiUrl,file);
  }
}
