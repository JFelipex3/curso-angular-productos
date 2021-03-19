import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class ProductoService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    getProductos(){
        return this._http.get(this.url + 'productos');
    }
}
