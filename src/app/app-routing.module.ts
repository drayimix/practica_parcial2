import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { MostrarDocenteComponent } from './components/docente/mostrar-docente/mostrar-docente.component';
import { CrearDocenteComponent } from './components/docente/crear-docente/crear-docente.component';
import { ActualizarDocenteComponent } from './components/docente/actualizar-docente/actualizar-docente.component';


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
    path:'docentes',
    component: MostrarDocenteComponent
  },
  {
    path:'addDocente',
    component: CrearDocenteComponent
  },
  {
    path:'docentes/edit/:id',
    component: ActualizarDocenteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
