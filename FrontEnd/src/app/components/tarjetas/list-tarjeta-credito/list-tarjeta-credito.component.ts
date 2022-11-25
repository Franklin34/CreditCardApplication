import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUsuarios } from 'src/app/models/IPerfilUsuario';
import { TarjetaCredito } from 'src/app/models/tarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-tarjeta-credito',
  templateUrl: './list-tarjeta-credito.component.html',
  styleUrls: ['./list-tarjeta-credito.component.css']
})
export class ListTarjetaCreditoComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder, public usuarioService: UsuarioService,public toastr:ToastrService) {
    this.form = this.formBuilder.group({
      pK_idUsuario: 0,
      cedulaUsuario: ['',[Validators.required],],
      nombreUsuario: ['',[Validators.required],],
      apellidosUsuario: ['',[Validators.required],],
      enfoque: ['',[Validators.required],],
      experiencia: ['',[Validators.required],],
      numero: ['',[Validators.required],],
      email: ['',[Validators.required],]
    })
   }

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

  verTutor(usuario:IUsuarios){
    this.form.patchValue({
      cedulaUsuario:usuario.cedulaUsuario,
      nombreUsuario:usuario.nombreUsuario,
      apellidosUsuario: usuario.apellidosUsuario,
      enfoque:usuario.enfoque,
      experiencia:usuario.experiencia,
      numero:usuario.numero,
      email:usuario.email,
    });
  }
}
