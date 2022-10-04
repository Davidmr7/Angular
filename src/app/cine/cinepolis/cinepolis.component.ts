import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  constructor() { }
  nombre:string="";
  compradores:number;
  boletos:number;
  total:number;
  newTotal:any;
  boletoPersona:number;
  activar:boolean=false;
  activarError:boolean=false;
  mensaje:string;
  descuento:number;
  activarDescuento:boolean;
  box:string;
  totalTarjeta:number;
  totalDescuento:number;
  activarTarjeta:boolean;
procesar(){
  this.activar=true;
  this.total=this.boletos * 12;
  this.boletoPersona = this.boletos/this.compradores;
  

  if(this.boletoPersona >= 0 && this.boletoPersona <=7){
    this.activarError=false;
    if(this.boletoPersona > 5){
      this.activarDescuento=true;
      this.descuento = this.total * 0.15;
      this.totalDescuento = this.total - this.descuento;
      if(this.box == "true"){
        this.activarTarjeta = true;
        this.newTotal = ("Se aplica 15% de descuento el total es $" +  this.totalDescuento.toFixed(2));
        this.totalTarjeta = this.totalDescuento - (this.totalDescuento * 0.10) ;
      }
      else{
        this.activarTarjeta = false;
        this.newTotal = ("Se aplica 15% de descuento el total es $" +  this.totalDescuento.toFixed(2));
      }
     }
     else if(this.boletoPersona >= 3 && this.boletoPersona <= 5){
      this.activarDescuento=true;
       this.descuento = this.total * 0.10;
       this.totalDescuento = this.total - this.descuento;
      if(this.box == "true"){
        this.activarTarjeta = true;
        this.newTotal = ("Se aplica 10% de descuento el total es $" +  this.totalDescuento.toFixed(2));
        this.totalTarjeta = this.totalDescuento - (this.totalDescuento * 0.10) ;
      }
      else{
        this.activarTarjeta=false;
        this.newTotal = ("Se aplica 10% de descuento el total es $" +  this.totalDescuento.toFixed(2));
      }
     }
     else if(this.boletoPersona <= 2.9){
      this.activarDescuento=false;
      if(this.box == "true"){
        this.activarTarjeta=true;
        this.newTotal = ("No se aplica ningun descuento por la cantidad de boletos por persona");
        this.totalTarjeta = this.total - (this.total * 0.10) ;
      }
      else{
        this.activarTarjeta=false;
        this.newTotal = ("No se aplica ningun descuento");
      }
     }
  }
  else{
    this.activarError=true;
    this.activar=false;
    this.mensaje=("Error no se puede comprar mas de 7 boletos por persona");
  }
  if(this.compradores < 0 || this.boletos < 0){
    this.activarError=true;
    this.activar=false;
    this.mensaje=("Error: Introduce un numero correcto");
  }
 
  
}

  ngOnInit(): void {
  }

}
