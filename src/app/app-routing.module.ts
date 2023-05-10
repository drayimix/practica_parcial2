import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo1Component } from './components/ejemplos/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplos/ejemplo2/ejemplo2.component';
import { Ejemplo6Component } from './components/ejemplos/ejemplo6/ejemplo6.component';
import { AgregarProductoComponent } from './components/ejemplos/agregar-producto/agregar-producto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'ejemplo1',
    component: Ejemplo1Component
  },
  {
    path: 'ejemplo2',
    component: Ejemplo2Component
  },
  {
    path: 'ejemplo6',
    component: Ejemplo6Component
  },
  {
    path: 'agregarProducto',
    component: AgregarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
