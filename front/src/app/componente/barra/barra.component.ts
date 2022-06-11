import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/Servicios/cliente-servicio';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css'],
})
export class BarraComponent implements OnInit {
  public id: any;
  public token: any;
  public nombres: any;

  constructor(private router: Router, private clienteService: ClienteService) {
    this.id = clienteService.obtenerIdentidad();
    this.token = clienteService.obtenerToken();
    this.nombres = clienteService.obtenernombre();
  }

  ngOnInit(): void {}

  inicioSesion() {
    this.router.navigate(['/login']);
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('nombres');

    this.id = null;
    this.nombres = null;
    this.nombres = null;

    this.router.navigate(['/login']);
  }
}
