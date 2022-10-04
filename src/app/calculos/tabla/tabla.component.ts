import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
i:number =0;
numeroTabla:string="";
tablasMulti:string []=[];
resultadoTotal:number|string="";
//tablasMulti:number[]|string[]=[];
resultadoTabla:number=0;

//resultadoTabla:number = 0;


  constructor() { }

  tablas():void{
        for(this.i=1; this.i<=10; this.i++){ 
          this.resultadoTabla = parseInt(this.numeroTabla) * this.i;
          this.tablasMulti.push(this.numeroTabla + " x "+  this.i + " = " + this.resultadoTabla);
          //this.resultadoTotal=this.tablasMulti.push("hola");

          //this.tablasMulti=this.tablasMulti2;
        //this.tablasMulti[(this.numeroTabla + " x "+  this.i + " = " + this.resultadoTabla)];

        //console.log(this.tablasMulti);
      }
      }

  ngOnInit(): void {
  }

}
