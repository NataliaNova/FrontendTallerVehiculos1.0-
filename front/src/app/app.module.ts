import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FooterComponent } from './componente/footer/footer.component';
import { LoginComponent } from './componente/login/login.component';
import { ContactoComponent } from './componente/contacto/contacto.component';
import { NoAuthComponent } from './componente/no-auth/no-auth.component';
import { ProductoIndexComponent } from './componente/productos/producto-index/producto-index.component';
import { ProductoCrearComponent } from './componente/productos/producto-crear/producto-crear.component';
import { ProductoEditarComponent } from './componente/productos/producto-editar/producto-editar.component';
import { VentasComponent } from './componente/ventas/ventas.component';
import { UsuarioComponent } from './componente/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//NGPrime
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { RegistarClienteComponent } from './componente/registar-cliente/registar-cliente.component';
import { AgendamientoComponent } from './componente/agendamiento/agendamiento.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    FooterComponent,
    LoginComponent,
    ContactoComponent,
    NoAuthComponent,
    ProductoIndexComponent,
    ProductoCrearComponent,
    ProductoEditarComponent,
    VentasComponent,
    UsuarioComponent,
    RegistarClienteComponent,
    AgendamientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
