import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IVenta } from 'src/app/interfaces/IVentas';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css'],
})
export class VentaComponent {
  ventas: IVenta[] = [];
  nuevaVenta: IVenta; // No es necesario inicializarla aquí
  showEditModal: boolean = false;
  id: any;
  info: any;

  editar: FormGroup=this.fb.group({
    idVenta: '',
    totalProducto:'',
    total: '',
    contacto: '',
    idLocalidad: '',
    telefono: '',
    direccion: '',

  })

  constructor(private ventaService: VentaService, private fb: FormBuilder) {
    this.nuevaVenta = {
      idVenta: 1,
      totalProducto: 0,
      total: 0,
      contacto: '',
      idLocalidad: 'LIM',
      telefono: '',
      direccion: '',

      fechaVenta: new Date().toISOString(),
    };
  }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas(): void {
    this.ventaService.getVenta().subscribe((ventas) => {
      this.ventas = ventas;
      console.log(this.ventas);
    });
  }

  getVenta(id:any){
    this.ventaService.seleccionarVenta(id)
    .subscribe((resp:any)=>{
      this.info=resp;
      this.id=id;
    })
  }

  crearVenta(): void {
    this.ventaService.createVenta(this.nuevaVenta).subscribe(
      (respuesta) => {
        console.log('Venta creada exitosamente', respuesta);
        this.nuevaVenta = {
          idCliente: 0,
          totalProducto: 0,
          total: 0,
          contacto: '',
          idLocalidad: '',
          telefono: '',
          direccion: '',
          idTransaccion: '',
          fechaVenta: new Date().toISOString(),
        };
        this.getVentas();
      },
      (error) => {
        console.error('Error al crear la venta', error);
        this.getVentas();
      }
    );
  }

  eliminarVenta(idventa: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta venta?')) {
      this.ventaService.deleteVenta(idventa).subscribe(
        (respuesta) => {
          console.log('venta eliminada exitosamente', respuesta);
          this.getVentas();
        },
        (error) => {
          console.error('venta al eliminar la categoría', error);
          this.getVentas();
        }
      );
    }
  }

  editarVenta(id:any){
    if(!this.editar.valid){
      this.editar.markAllAsTouched();
      return
    }
    const ventas:any={
      idCliente:this.editar.value.idCliente,
    totalProducto:this.editar.value.totalProducto,
    id:id,
    contacto: this.editar.value.contacto,
    idLocalidad: this.editar.value.idLocalidad,
    telefono: this.editar.value.telefono,
    direccion: this.editar.value.direccion,
    }
    this.ventaService.upDate(ventas)
    .subscribe(resp=>{
      console.log("actualizado",resp);
    });
    this.getVentas();
  }
}
