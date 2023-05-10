import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit{
  items: MenuItem[]=[];

  ngOnInit(): void {
    this.items=[
      {
        label:'Ejemplos',
        icon:'',
        items: [
          {
            label:'Ejemplo 1',
            icon:'',
            routerLink:'/ejemplo1'
          },
          {
            label:'Ejemplo 2',
            icon:'',
            routerLink:'/ejemplo2'
          },
          {
            label:'Ejemplo 6',
            icon:'',
            routerLink:'/ejemplo6'
          }
        ]
      },
      {

      }
    ]
  }
}
