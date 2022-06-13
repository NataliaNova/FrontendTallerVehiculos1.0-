import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './componente/barra/barra.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ProductoCrearComponent } from './componente/productos/producto-crear/producto-crear.component';
import { ProductoEditarComponent } from './componente/productos/producto-editar/producto-editar.component';
import { ProductoIndexComponent } from './componente/productos/producto-index/producto-index.component';
import { UsuarioComponent } from './componente/usuario/usuario.component';
import { LoginComponent } from './componente/login/login.component';
import { VentasComponent } from './componente/ventas/ventas.component';
import { ContactoComponent } from './componente/contacto/contacto.component';
import { NoAuthComponent } from './componente/no-auth/no-auth.component';
import { RegistarClienteComponent } from './componente/registar-cliente/registar-cliente.component';
import { AgendamientoComponent } from './componente/agendamiento/agendamiento.component';

const routes: Routes = [
  { path: 'barra', component: BarraComponent },
  { path: '', component: InicioComponent },
  { path: 'productoCrear', component: ProductoCrearComponent },
  { path: 'productoEditar', component: ProductoEditarComponent },
  { path: 'productoIndex', component: ProductoIndexComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'noAutorizado', component: NoAuthComponent },
  { path: 'registrarCliente', component: RegistarClienteComponent },
  { path: 'agendamiento', component: AgendamientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
