import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/producto';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit{
  

  ngOnInit(): void {

  }

  onSubmit(){}

  cancel(){}
}
