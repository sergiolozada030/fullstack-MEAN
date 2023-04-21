import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() products: Product[] = [];

  selectProduct(product: Product) {
    console.log(product);
  }
}
