import { Role } from "./Role";

export interface Mensaje {
  codigo:  string;
  mensaje: string;
  object:  IUsuarios[];
}

export interface Mensaje1 {
  codigo:  string;
  mensaje: string;
  object:  IUsuarios;
}
//Se crea la interfacede Usuario que recibe el objeto Json de Usuario
export interface IUsuarios {
  pK_idUsuario?:           number;
  cedulaUsuario:          string;
  nombreUsuario:          string;
  apellidosUsuario:  string;
  enfoque:        string;
  experiencia:           string;
  email?:      string;
  avatar?:             string;
  fK_idRolUsuario1:       number;
  role?: Role;
  token?: string
}

