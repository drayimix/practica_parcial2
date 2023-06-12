import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SectionComponent } from './components/layout/section/section.component';
import { MenubarModule } from 'primeng/menubar';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessageService} from 'primeng/api';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { ToastModule} from 'primeng/toast';
import { MostrarDocenteComponent } from './components/docente/mostrar-docente/mostrar-docente.component';
import { CrearDocenteComponent } from './components/docente/crear-docente/crear-docente.component';
import { ActualizarDocenteComponent } from './components/docente/actualizar-docente/actualizar-docente.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    MostrarClienteComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    MostrarDocenteComponent,
    CrearDocenteComponent,
    ActualizarDocenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
