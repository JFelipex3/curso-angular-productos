import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductosAddComponent{
    public titulo: string;
    public producto: Producto;
    public filesToUpload: any;
    public resultUpload: any;

    constructor(
        private _ProductoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = 'Crear un Nuevo Producto';
        this.producto = new Producto(0, '', '', 0, '');
    }

    ngOnInit(){
        console.log('Componente ProductosAddComponent cargado.');
    }
    
    onSubmit(){
        console.log(this.producto);

        if(this.filesToUpload.length >= 1){
            this._ProductoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
                console.log(result);
                this.resultUpload = result;
                this.producto.imagen = this.resultUpload.filename;
                this.saveProducto();
            }, (error) => {
                console.log(error);
            });
        } else {
            this.saveProducto();
        }
    }

    saveProducto(){
        this._ProductoService.addProducto(this.producto).subscribe(
            resp => {
                if(resp.code == 200){
                    this._router.navigate(['/productos']);
                } else{
                    console.log(resp);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }
}
