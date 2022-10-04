import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({//Decorador 
  selector: 'app-product-list',//Nombre donde se referencia el componente 
  templateUrl: './product-list.component.html',//Hoja de estio 
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {//Porque es una interface y es una implementacion de la interfaz

  imageWidth:number=50;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string="";

  productos:IProducto[]=[
    {
    "productoID":1,
    "modelo":"sentra",
    "descripcion":"auto 4 puertas",
    "marca":"Nissan",
    "year":"Febrero 3 2020",
    "precio":250000,
    "puntos":3.3,
    "ImagenUrl":"https://www.elcarrocolombiano.com/wp-content/uploads/2019/01/20190117-NISSAN-SENTRA-2020-FOTOS-ESPIA-02.jpg"

  },
  {
    "productoID":2,
    "modelo":"Rio",
    "descripcion":"auto 4 puertas",
    "marca":"Nissan",
    "year":"Marzo 24 2020",
    "precio":150000,
    "puntos":4.3,
    "ImagenUrl":"https://static.retail.autofact.cl/blog/c_img_740x370.1aqcsb1k70s0p2z.jpg"

  },
  {
    "productoID":3,
    "modelo":"March",
    "descripcion":"auto 4 puertas",
    "marca":"Nissan",
    "year":"Marzo 24 2020",
    "precio":150000,
    "puntos":4.3,
    "ImagenUrl":"https://acnews.blob.core.windows.net/imgnews/medium/NAZ_10d4c722d0de4cf88311a34a6029a4b7.jpg"

  }

]


  constructor() { }

  ShowImagen():void{
    this.muestraImg=!this.muestraImg;//Cambiarlo si esta en true a lase y viceversa
  }

  ngOnInit(): void {
  }

}

