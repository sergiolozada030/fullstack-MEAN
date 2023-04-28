import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [],
})
export class PrimengModule {}
