import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {


  //i18nSelect
  nombre:string="Kevin";
  genero:string="masculino"
  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  cliente:string[]=["Ana","Juan",'Julio','Peroni']
  clientesMapa={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'
  }

  constructor(private primeNgConfig:PrimeNGConfig) { }

  ngOnInit(): void {
    this.primeNgConfig.ripple=true;
  }

  cambiarNombre(){
    if(this.nombre=="Kevin"){
      this.nombre="Ana";
      this.genero="femenino";
    }else{
      this.nombre="Kevin";
      this.genero="masculino";
    }
  }

  borrarCliente(){
    this.cliente.pop();
  }

  //KeyValue pipe
  persona={
    nombre:'Kevin',
    edad:28,
    direccion:'Lima, Perú'
  }

  //Json pipe
  heroes=[
    {
    nombre:'Superman',
    vuela:true
    },
    {
      nombre:'Batman',
      vuela:true
    },
    {
      nombre:'Aquaman',
      vuela:true
    }
]


//Async pipe

miObservable= interval(1000);

valorPromesa= new Promise((resolve,reject)=>{

  setTimeout(() => {
      resolve('Tenemos data de promesa');
  }, 3500);

})

}
