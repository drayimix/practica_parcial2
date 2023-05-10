export interface Cliente{
  name: string;
  age: number;
  telefono:number;
  direccion: string;
}


export class Client{
  name: string;
  age: number;
  telefono:number;
  direccion: string;

  constructor(name: string, age:number,telefono:number,direccion:string) {
    this.name=name;
    this.age=age;
    this.telefono=telefono;
    this.direccion=direccion;
  }
}
