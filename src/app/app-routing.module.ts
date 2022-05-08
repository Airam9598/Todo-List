import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import { EditarTareaComponent } from './components/editar-tarea/editar-tarea.component';

const routes: Routes = [
  { path: '',pathMatch:"full" , redirectTo:'Tareas' },
  { path: 'Tareas', component: TareasComponent },
  { path: 'editar-tarea/:id', component: EditarTareaComponent },
  { path: 'agregar', component: AgregarTareaComponent },
  { path: 'editar-tarea',pathMatch:"full" , redirectTo:'Tareas' },
  { path: 'agregar-tarea',pathMatch:"full" , redirectTo:'Tareas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
