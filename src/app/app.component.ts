import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre:string = "kevin"
  numero:number = 1000;
  objeto={
    nombre:"kevin",
    numero:0
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.numero)
  }

}
