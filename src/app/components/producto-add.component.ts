import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductosAddComponent{
    public titulo: string;

    constructor(){
        this.titulo = 'Crear un Nuevo Producto';
    }

    ngOnInit(){
        console.log('Componente ProductosAddComponent cargado.');
    }
}
