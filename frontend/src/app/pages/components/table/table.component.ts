import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() products: Product[] = [];

  constructor(private router: Router) {}

  deleteProduct(product: Product) {
    console.log('Eliminar este producto => ', product);
  }

  editProduct(product: Product) {
    this.router.navigate(['/edit'], { state: product });
  }
}
