import { Component, OnInit } from '@angular/core';
import { ProductosModel } from 'src/app/Models/productos-model';
import { ProductoService } from 'src/app/Servicios/producto-servicio';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css'],
})
export class ProductoEditarComponent implements OnInit {
  //Var.Aux
  public rol: any;
  public producto: any;
  public id: any;
  public token!: any;
  formValue!: FormGroup;

  productoModel: ProductosModel = new ProductosModel();

  error_message!: any;
  success_message!: any;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private productoService: ProductoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.rol = this.usuarioService.obtenerRol();
    this.rol = this.usuarioService.obtenerRol();
    this.token = this.usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.validar();
    this.obtenerCampos();
  }
  validar() {
    if (this.rol != 'ADMIN') {
      this.router.navigate(['no-autorizado']);
    }
  }
  obtenerCampos() {
    this.formValue = this.formBuilder.group({
      nombre: [''],
      marca: [''],
      descripcion: [''],
      precio_compra: [''],
      precio_venta: [''],
      cantidad: [''],
    });
    this.obtener();
  }

  obtener() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.productoService.obtenerProducto(this.id).subscribe((response) => {
        this.producto = response;
        console.log(this.producto);
        this.formValue.controls['nombre'].setValue(this.producto.nombre);
        this.formValue.controls['marca'].setValue(this.producto.marca);
        this.formValue.controls['descripcion'].setValue(
          this.producto.descripcion
        );
        this.formValue.controls['precio_venta'].setValue(
          this.producto.precio_venta
        );
        this.formValue.controls['precio_compra'].setValue(
          this.producto.precio_compra
        );

        this.formValue.controls['cantidad'].setValue(this.producto.cantidad);

        this.productoModel._id = this.producto._id;
      });
    });
  }

  /* actualizarProducto() {
    this.productoModel.titulo = this.formValue.value.titulo;
    this.productoModel.precio_compra = this.formValue.value.precio_compra;
    this.productoModel.precio_venta = this.formValue.value.precio_venta;
    this.productoModel.stock = this.formValue.value.stock;
    this.productoModel.descripcion = this.formValue.value.descripcion;
    this.productoModel.idcategoria = this.formValue.value.idcategoria;

    this.productoService
      .actualizarProducto(this.productoModel, this.productoModel._id)
      .subscribe((res) => {
        Swal.fire('Producto actualizada!');

        setTimeout(() => {
          this.router.navigate(['producto-index']);
        }, 2000);
      });
  } */

  actualizarProducto() {
    this.productoModel.nombre = this.formValue.value.nombre;
    this.productoModel.marca = this.formValue.value.marca;
    this.productoModel.descripcion = this.formValue.value.descripcion;
    this.productoModel.precio_compra = this.formValue.value.precio_compra;
    this.productoModel.precio_venta = this.formValue.value.precio_venta;
    this.productoModel.cantidad = this.formValue.value.cantidad;

    this.productoService
      .actualizarProducto(this.productoModel, this.productoModel._id)
      .subscribe((res) => {
        Swal.fire('El producto ha sido actualizado!');
        setTimeout(() => {
          this.router.navigate(['producto-index']);
        }, 2000);
      });
  }
}
