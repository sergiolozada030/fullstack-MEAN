import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/products.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataProducts: Product[] = [];
  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.listProduct();
  }

  listProduct() {
    this.productService.getProducts().subscribe((products) => {
      this.dataProducts = products;
    });
  }

  createProduct() {
    this.router.navigateByUrl('create');
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe((resp) => {
      console.log('Eliminar este producto => ', resp);
      this.listProduct();
    });
  }
}
