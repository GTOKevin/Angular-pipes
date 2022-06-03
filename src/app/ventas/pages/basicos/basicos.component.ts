import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string='kevin';
  nombreUpper:string='KEVIN';
  nombreCompleto:string='kEvIn vIRgIlIo';

  fecha:Date = new Date();

}
