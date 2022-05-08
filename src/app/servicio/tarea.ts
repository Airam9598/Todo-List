export class Tarea{
    id!:String;
    Titulo!:String;
    Descripcion!:String;
    Estado:String
    constructor(id:string,titulo:string, descipcion:string, estado:string){
        this.id=id;
        this.Titulo=titulo;
        this.Descripcion=descipcion;
        this.Estado=estado;
    }
}