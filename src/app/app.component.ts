import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Nombre del componenete 
  templateUrl: './app.component.html',//Pagina principal para invocar este archivo 
  styleUrls: ['./app.component.css']//Hojas de estilo 
})
export class AppComponent {
  title = 'ejemplo2-Angular';
  nombre:string="David";
  escuela:string="UTL-LEON";
  
}

