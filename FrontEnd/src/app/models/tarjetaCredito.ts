export class TarjetaCredito {
    id?: number;
    titular?:string;
    numeroTarjeta?:string;
    fechaExpiracion?: string;
    cvv?:string;

    constructor(id:number){
        this.id = id;
    }
}