import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces/products.interfaces';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  dataEdit: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.dataEdit = navigation?.extras.state;
  }

  editProduct(product: Product) {
    console.log(product);
  }
}
