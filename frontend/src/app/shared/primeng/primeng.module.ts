import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, InputTextModule, MenubarModule],
  exports: [ButtonModule, InputTextModule, MenubarModule],
})
export class PrimengModule {}
