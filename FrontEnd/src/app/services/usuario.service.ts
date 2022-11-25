import { Contacto } from './../models/contacto';
import { IUsuarios } from './../models/IPerfilUsuario';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myAppUrl = 'https://localhost:44325/';
  myApiUrl = 'api/Usuario/';

  list: IUsuarios[] = [];
  private actualizarFormulario = new BehaviorSubject<IUsuarios>({} as any);


  constructor(private http: HttpClient) {

  }

  guuardarUsuario(usuario:IUsuarios) : Observable<IUsuarios> {
    console.log('hola')
    return this.http.post<IUsuarios>(this.myAppUrl + this.myApiUrl,usuario);
  }

  eliminarUsuario(id:number):Observable<IUsuarios>{
    return this.http.delete<IUsuarios>(this.myAppUrl + this.myApiUrl + id);
  }

  actualizarUsuario(id:number,usuario:IUsuarios) :Observable<IUsuarios>{
    return this.http.put<IUsuarios>(this.myAppUrl + this.myApiUrl + id, usuario);
  }

  contactarUsuario(contacto:Contacto) :Observable<Contacto>{
    return this.http.post<Contacto>(this.myAppUrl + this.myApiUrl + 'contactarTutor', contacto);
  }

  obtenerUsuarios(){
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then(data => {
      this.list = data as IUsuarios[];
      console.log(this.list)
    })
  }

  actualizar(tarjeta: IUsuarios){
    this.actualizarFormulario.next(tarjeta);
  }

  obtenerUsuarios$():Observable<IUsuarios>{
    return this.actualizarFormulario.asObservable();
  }

}
