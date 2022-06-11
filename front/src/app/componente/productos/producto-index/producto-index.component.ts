import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Servicios/producto-servicio';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

// import { usuarioService } from 'src/app/Servicios/usuario-servicio';

//import { PageEvent } from '@angular/material/paginator';
//import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-producto-index',
  templateUrl: './producto-index.component.html',
  styleUrls: ['./producto-index.component.css'],
})
export class ProductoIndexComponent implements OnInit {
  public rol: any;
  public token: any;
  public dataProductos: any;
  public filtro: any;
  public filtroText: any;

  public base_url = environment.url;
  constructor(
    private router: Router,
    private productoService: ProductoService,

    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
}
