import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1:string="";
  num2:string="";
  nombreOperacion="";
  resultado:number=0;

  constructor() { }
 sumar():void{
   // this.resultado= parseInt(this.num1) + parseInt(this.num2);
    //componente nuevo tabla calculos
    //
 }

 operacion():void{ 
  switch(this.nombreOperacion){
    case "multiplicar":
      this.resultado= parseInt(this.num1) * parseInt(this.num2);
      break;
      case "sumar":
      this.resultado= parseInt(this.num1) + parseInt(this.num2);
      break;
      case "dividir":
      this.resultado= parseInt(this.num1)/parseInt(this.num2);
      break;
      case "restar":
      this.resultado= parseInt(this.num1) - parseInt(this.num2);
      break;

  }
  //this.resultado= parseInt(this.num1) + parseInt(this.num2);
}


  ngOnInit(): void {
  }

}
