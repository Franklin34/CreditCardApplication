import { IUsuarios } from 'src/app/models/IPerfilUsuario';
import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  constructor(public usuarioService: UsuarioService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios();
  }

  eliminarUsuario(id:number){
    if(confirm("Esta seguro que desea eliminar el registro?")){
      this.usuarioService.eliminarUsuario(id).subscribe(data =>{
        this.toastr.warning("Registro eliminado","El usuario fue eliminado");
        this.usuarioService.obtenerUsuarios();
      });
    }
  }

  editar(usuario:IUsuarios){
    this.usuarioService.actualizar(usuario);
  }

  contactar(usuario:IUsuarios){
    this.usuarioService.contactarUsuario(usuario).subscribe(data => {
      console.log('sda');
    });
  }

}
