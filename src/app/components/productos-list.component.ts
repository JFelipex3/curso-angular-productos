import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'productos-list',
    templateUrl: '../views/productos-list.html',
    providers: [ProductoService]
})

export class ProductosListComponent{
    public titulo: string;
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
                if(result.code != 200){
                    console.log(result);
                } else {
                    this.productos = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        )
    }
}