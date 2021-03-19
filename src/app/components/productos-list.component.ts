import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
    selector: 'productos-list',
    templateUrl: '../views/productos-list.html',
    providers: [ProductoService]
})

export class ProductosListComponent{
    public titulo: string;
    public reqResponse: any;
    public productos: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService,
    ){
        this.titulo = 'Listado de Productos';
    }

    ngOnInit(){
        console.log('Componente ProductosListComponent cargado.');

        this._productoService.getProductos().subscribe(
            result => {
                this.reqResponse = result;
                
                if(this.reqResponse.code != 200){
                    console.log(this.reqResponse);
                } else {
                    this.productos = this.reqResponse.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        )
    }
}