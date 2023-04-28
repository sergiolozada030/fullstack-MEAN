import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces/products.interfaces';
import { ProductsService } from '../services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  dataEdit: any;

  constructor(
    private router: Router,
    private productService: ProductsService,
    private location: Location
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.dataEdit = navigation?.extras.state;
  }

  editProduct(product: Product) {
    const id = this.dataEdit._id;
    this.productService.updateProduct(product, id).subscribe((resp) => {
      this.location.back();
    });
  }
}
