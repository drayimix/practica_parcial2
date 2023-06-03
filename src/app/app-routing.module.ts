import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path:'clientes',
    component: MostrarClienteComponent
  },
  {
    path: 'addCliente',
    component: CrearClienteComponent
  },
  {
    path: 'clientes/edit/:id',
    component: ActualizarClienteComponent
  },
  {
    path:'ventas',
    component: MostrarVentaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
