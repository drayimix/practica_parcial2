export interface Producto{
  name: string;
  price: number;
  img: string;
  category: string;
}


export class Product{
  name: string;
  price: number;
  img: string;
  category: string;
  constructor(name: string, price: number,img: string,category: string){
    this.name = name;
    this.price =price;
    this.img = img;
    this.category = category;
  }
}
