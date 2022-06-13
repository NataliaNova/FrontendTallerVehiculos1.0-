import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Servicios/producto-servicio';
import { ProductosModel } from 'src/app/Models/productos-model';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

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

  productoModel: ProductosModel = new ProductosModel();

  public base_url = environment.url;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private productoService: ProductoService,
    private formBuilder: FormBuilder
  ) {
    this.rol = this.usuarioService.obtenerRol();
    this.token = this.usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.validar();
    this.listar();
  }

  validar() {
    if (this.rol != 'ADMIN') {
      this.router.navigate(['no-autorizado']);
    }
  }

  listar() {
    this.productoService.obtenerProductos().subscribe((res) => {
      this.dataProductos = res;
      console.log(this.dataProductos);
    });
  }

  search(searchForm: any) {
    if (this.filtroText == '') {
      this.listar();
    } else {
      this.productoService
        .obtenerProductosParametro(searchForm.value.filtro)
        .subscribe((res) => {
          this.dataProductos = res;
          console.log(this.dataProductos);
        });
    }
  }
  eliminarProducto(row: any) {
    this.productoService.deleteProducto(row._id).subscribe((res) => {
      Swal.fire('Producto eliminado!' + 'error');
      this.listar();
    });
  }
}
