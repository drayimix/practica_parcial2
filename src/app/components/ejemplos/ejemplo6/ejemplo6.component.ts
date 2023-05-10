import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/producto';

@Component({
  selector: 'app-ejemplo6',
  templateUrl: './ejemplo6.component.html',
  styleUrls: ['./ejemplo6.component.css']
})
export class Ejemplo6Component implements OnInit{
  listProduct: Product[]=[];

  constructor(){}

  ngOnInit(): void {
    this.addProduct();
    console.log(this.listProduct);
  }

  addProduct(){
    this.listProduct=[
      {
        name:'motoCycle',
        price: 5000000,
        img: '../../../assets/img/moto.jpg',
        category: 'transporte'
      },
      {
        name:'consola',
        price: 1000000,
        img: '../../../assets/img/consola.jpg',
        category: 'videogames'
      },
      {
        name:'libros',
        price: 20000,
        img: '../../../assets/img/libros.jpg',
        category: 'literatura'
      },
      {
        name:'gafas',
        price: 18000,
        img: '../../../assets/img/sunglasses.jpg',
        category: 'moda'
      }
    ]
  }
}
