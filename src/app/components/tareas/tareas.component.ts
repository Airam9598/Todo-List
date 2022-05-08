import { Component, OnInit } from '@angular/core';
import { CrudTareaService } from 'src/app/servicio/crud-tarea.service';
import { Tarea } from '../../servicio/tarea';
import { RouterLink,Router } from '@angular/router';
@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
Tareas:Array<Tarea>=[];
crear:boolean=false;
load:boolean=true;
  constructor(private crudTareas:CrudTareaService) { 
    this.crudTareas.ObtenerTareas().then(item => {
        this.Tareas=item;
        this.load=false;
      });
  }

  ngOnInit(): void {

  }

  eliminarTarea(id:String){
    this.load=true;
    this.crudTareas.EliminarTarea(id.toString());
    this.crudTareas.ObtenerTareas().then(item => {
      this.Tareas=item;
      this.load=false;
      });
  }

  crearTarea(){
    this.crear=true;
  }

  CarganuevaTarea(){
    this.load=true;
    this.crudTareas.ObtenerTareas().then(item => {
      this.Tareas=item;
      this.load=false;
    });
    this.crear=false;
  }
}
