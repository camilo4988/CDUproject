import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../producto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})


export class ProductDetailComponent implements OnInit {
  @Input() producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductos(id)
      .subscribe(producto => this.producto = producto);
  }

  goBack(): void {
    this.location.back();
  }

  pagar(): void {
    this.location.forward();
  }

}




