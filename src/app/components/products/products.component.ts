import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {

  selectedProduct: Producto;

  products: Producto[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(producto: Producto): void {
    this.selectedProduct = producto;
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
  
}



/*****************************************************************/



