import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTOS } from './listaproductos';
import { Producto } from './producto'



@Injectable({                 /*registro del proveedor de datos del servicio*/
  providedIn: 'root'
})

export class ProductService {
  constructor() { }/*caso de servicio como servicio*/
  /*se inyecta el messageservice en el productservice que se inyecta en el heroesComponent*/

 

  getProducts(): Observable<Producto[]> {
    // TODO: send the message _after_ fetching the heroes

    return of(PRODUCTOS);
  }

  getProductos(id: number): Observable<Producto> {
    // TODO: send the message _after_ fetching the hero

    return of(PRODUCTOS.find(producto => producto.id === id));
  }



}

