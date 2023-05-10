import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsideComponent } from './components/layout/aside/aside.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SectionComponent } from './components/layout/section/section.component';
import { Ejemplo1Component } from './components/ejemplos/ejemplo1/ejemplo1.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenubarModule } from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Ejemplo2Component } from './components/ejemplos/ejemplo2/ejemplo2.component';
import { Ejemplo6Component } from './components/ejemplos/ejemplo6/ejemplo6.component';
import { AgregarProductoComponent } from './components/ejemplos/agregar-producto/agregar-producto.component';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo6Component,
    AgregarProductoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
