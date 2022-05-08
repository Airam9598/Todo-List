import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import { EditarTareaComponent } from './components/editar-tarea/editar-tarea.component';
import{FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    NavbarComponent,
    AgregarTareaComponent,
    EditarTareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
