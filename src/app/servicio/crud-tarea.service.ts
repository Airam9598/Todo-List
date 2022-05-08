import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc,setDoc,doc, deleteDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDXnaVUQoXEUalIoKOWSh4Xv1ix7jx8LtM",
  authDomain: "daw2-firstapp.firebaseapp.com",
  projectId: "daw2-firstapp",
  storageBucket: "daw2-firstapp.appspot.com",
  messagingSenderId: "85399385382",
  appId: "1:85399385382:web:73282cfead4b6aba5dbde7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const querySnapshot = getDocs(collection(db, "Tareas"));

@Injectable({
  providedIn: 'root'
})
export class CrudTareaService {

  constructor() { }
  AgregarTarea(datostarea:Tarea):string{
    try {
      const docRef = addDoc(collection(db, "Tareas") , {
        Titulo: datostarea.Titulo,
        Descripcion: datostarea.Descripcion,
        Estado: datostarea.Estado
      });
      return "agregado correctamente";
    } catch (e) {
      return "Error adding document";
    }
  }
async ModificarTarea(datos:Tarea){
  await setDoc(doc(db, "Tareas", datos.id.toString()), {
    Titulo: datos.Titulo.toString(),
    Descripcion: datos.Descripcion.toString(),
    Estado: datos.Estado.toString(),
  });
}
  async ObtenerTareas(){
    const querySnapshot = await getDocs(collection(db, "Tareas"));
    let arrays:Array<Tarea> = [];
    querySnapshot.forEach((doc) => {
      arrays.push(new Tarea(doc.id,doc.data()["Titulo"],doc.data()["Descripcion"],doc.data()["Estado"]));
    });
    return arrays;
  }

  async ObtenerTarea(id:string){
    const querySnapshot = await getDocs(collection(db, "Tareas"));
    let arrays:Array<Tarea> = [];
    querySnapshot.forEach((doc) => {
      if(doc.id==id){
        arrays.push(new Tarea(doc.id,doc.data()["Titulo"],doc.data()["Descripcion"],doc.data()["Estado"]));
      }
    });
    return arrays[0];
  }
  
  async EliminarTarea(id:string){
    await deleteDoc(doc(db, "Tareas", id));
  }
}
