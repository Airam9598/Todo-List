import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudTareaService } from 'src/app/servicio/crud-tarea.service';
import { Tarea } from 'src/app/servicio/tarea';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {
  load:boolean=true;
  formulariotarea:FormGroup;
  eID:any;
  tarea:Tarea=new Tarea("","","","");
  constructor(public formulario:FormBuilder,private crudService:CrudTareaService,private activateroute: ActivatedRoute,private route:Router) { 
    this.eID=this.activateroute.snapshot.paramMap.get("id");
    this.crudService.ObtenerTarea(this.eID).then(item => {
      this.tarea=item;
      this.load=false;
      this.formulariotarea=this.formulario.group({Titulo:this.tarea.Titulo.toString(),Descripcion:this.tarea.Descripcion.toString(),Estado:this.tarea.Estado});
    });
    this.formulariotarea=this.formulario.group({Titulo:this.tarea.Titulo.toString(),Descripcion:this.tarea.Descripcion.toString(),Estado:this.tarea.Estado});
  }

  ngOnInit(): void {
  }
  enviar_Datos():any{
    let value1= this.formulariotarea.value["Titulo"] =="" ? this.tarea.Titulo.toString():this.formulariotarea.value["Titulo"];
    let value2= this.formulariotarea.value["Descripcion"] =="" ? this.tarea.Titulo.toString():this.formulariotarea.value["Descripcion"];
    let value3= this.formulariotarea.value["Estado"] =="" ? this.tarea.Titulo.toString():this.formulariotarea.value["Estado"];
    this.crudService.ModificarTarea(new Tarea(this.eID,value1,value2,value3));
    this.route.navigateByUrl("/Tareas");
  }

}
