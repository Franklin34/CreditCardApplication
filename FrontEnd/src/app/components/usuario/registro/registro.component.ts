import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { IUsuarios } from 'src/app/models/IPerfilUsuario';
import { TarjetaCredito } from 'src/app/models/tarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnDestroy {
  form:FormGroup;
  suscription?:Subscription;
  usuario?:IUsuarios;
  idUsuario = 0;

  constructor(private formBuilder:FormBuilder, private usuarioService:UsuarioService,private toastr:ToastrService) {
    this.form = this.formBuilder.group({
      pK_idUsuario: 0,
      cedulaUsuario: ['',[Validators.required],],
      nombreUsuario: ['',[Validators.required],],
      apellidosUsuario: ['',[Validators.required],],
      enfoque: ['',[Validators.required, Validators.maxLength(16),Validators.minLength(16)],],
      experiencia: ['',[Validators.required],],
      email: ['',[Validators.required],]
    })
  }



  ngOnInit(): void {
    this.suscription = this.usuarioService.obtenerUsuarios$().subscribe(data =>{
      console.log(data);
      this.usuario = data;
      this.form.patchValue({
        cedulaUsuario:this.usuario.cedulaUsuario,
        nombreUsuario:this.usuario.nombreUsuario,
        apellidosUsuario: this.usuario.apellidosUsuario,
        enfoque:this.usuario.enfoque,
        experiencia:this.usuario.experiencia,
        email:this.usuario.email,
      });
    })
  }

  ngOnDestroy(){
    this.suscription!.unsubscribe();
  }

  guardarUsuario(){
    console.log(this.idUsuario)
    if(this.idUsuario === 0){
      this.agregar();
    }
    else{
      console.log('dsad')
      this.editar();
    }
  }

  agregar(){
    const usuario: IUsuarios = {
      cedulaUsuario: this.form.get('cedulaUsuario')?.value,
      nombreUsuario: this.form.get('nombreUsuario')?.value,
      apellidosUsuario: this.form.get('apellidosUsuario')?.value,
      enfoque: this.form.get('enfoque')?.value,
      experiencia: this.form.get('experiencia')?.value,
      email: this.form.get('email')?.value,
      fK_idRolUsuario1: 1,
    }

    this.usuarioService.guuardarUsuario(usuario).subscribe(data => {
      this.toastr.success("Registro agregado","El usuario fue agregado");
      this.usuarioService.obtenerUsuarios();
      this.form.reset();
    });
  }

  editar(){
    const usuario: IUsuarios = {
      cedulaUsuario: this.form.get('cedulaUsuario')?.value,
      nombreUsuario: this.form.get('nombreUsuario')?.value,
      apellidosUsuario: this.form.get('apellidosUsuario')?.value,
      enfoque: this.form.get('enfoque')?.value,
      experiencia: this.form.get('experiencia')?.value,
      email: this.form.get('email')?.value,
      fK_idRolUsuario1: 1,
    }
    this.usuarioService.actualizarUsuario(this.idUsuario,usuario).subscribe(data => {
      this.toastr.success("Registro Actualizado","La tarjeta fue Actualizada");
      this.usuarioService.obtenerUsuarios();
      this.form.reset();
      this.idUsuario = 0;
    });
  }

}
