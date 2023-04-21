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
    this.productService.getProducts().subscribe((products) => {
      this.dataProducts = products;
      console.log(this.dataProducts);
    });
  }

  crearProcduct() {
    this.router.navigateByUrl('create');
  }
}
