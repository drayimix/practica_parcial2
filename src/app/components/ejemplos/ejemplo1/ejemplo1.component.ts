import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit{

  persona = {
    nombre: 'andres',
    cargo: 'estudiante',
    salario: 5000
  }


  constructor(){}

  ngOnInit(): void {
    this.persona.nombre= 'pepito'
    console.log(this.persona)
    this.saludar();
    this.saludar2(this.name)
    console.log(this.cuadrado(this.num))
    console.log(this.operacion)
    console.log(this.person('laura',19))
  }

  //funciones
  saludar(){
    console.log('bienvenido');
  }

  saludar2(name: string){
    console.log(`bienvenido ${name}`);
  }
  name='karen'

  cuadrado(num:number){
    let cuad = num*num
    return cuad
  }
  num = 70

  //funciuon flecha

  operacion = (num:number) => {
    num*num
  }

  person = (name: string, age: number) =>(`nombre: ${name} y edad: ${age}` )
}
