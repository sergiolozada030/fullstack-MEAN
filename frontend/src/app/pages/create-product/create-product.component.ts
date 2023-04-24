import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  constructor(
    private productService: ProductsService,
    private location: Location
  ) {}

  createProduct(product: any) {
    // Create Product
    this.productService.createProduct(product).subscribe((resp) => {
      this.location.back();
    });
  }
}
