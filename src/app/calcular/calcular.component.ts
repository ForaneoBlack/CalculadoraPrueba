import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent  {


  operadorA: number = 0;
  operadorB: number = 0;
  result: number = 0;

  sumar():void{
    this.result = this.operadorA + this.operadorB;
  }
}
