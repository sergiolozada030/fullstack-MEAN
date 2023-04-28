import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() products: Product[] = [];
  @Output() optionEvent: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  deleteProduct(id: string) {
    this.optionEvent.emit(id);
  }

  editProduct(product: Product) {
    this.router.navigate(['/edit'], { state: product });
  }
}
