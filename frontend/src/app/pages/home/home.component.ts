import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces/products.interfaces';
import { ProductsService } from '../services/products.service';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataProducts: Product[] = [];
  constructor(
    private router: Router,
    private productService: ProductsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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

  confirmDelete(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteProduct(id);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe((resp) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Confirmed',
        detail: 'You have accepted',
      });
      this.listProduct();
    });
  }
}
