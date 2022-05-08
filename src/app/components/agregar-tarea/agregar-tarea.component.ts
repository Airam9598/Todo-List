import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import { CrudTareaService } from 'src/app/servicio/crud-tarea.service';
import { Tarea } from 'src/app/servicio/tarea';
import { TareasComponent } from '../tareas/tareas.component';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {

  formulariotarea:FormGroup;

  constructor(public formulario:FormBuilder,private crudService:CrudTareaService,private router:Router,private tareas:TareasComponent) { 
    this.formulariotarea=this.formulario.group({Titulo:[''],Descripcion:[''],Estado:['']});
  }

  ngOnInit(): void {
  }

  enviar_Datos():any{
    let tarea= new Tarea("",this.formulariotarea.value["Titulo"],this.formulariotarea.value["Descripcion"],this.formulariotarea.value["Estado"]);
    this.crudService.AgregarTarea(tarea);
    this.tareas.CarganuevaTarea();
  }

  cancelar():any{
    this.tareas.CarganuevaTarea();
  }

}
