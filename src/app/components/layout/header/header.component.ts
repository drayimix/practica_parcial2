import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[]=[];
  ngOnInit(): void {
    this.items=[
      {
        label:'Alumnos',
        icon: 'pi pi-user',
        routerLink: '/clientes'
      },
      {
        label: 'Docentes',
        icon: 'pi pi-shopping-cart',
        routerLink: '/docentes'
      },
      // {
      //   label: 'Coche',
      //   icon: 'pi pi-car',
      //   routerLink: ''
      // }
    ]
  }
}
