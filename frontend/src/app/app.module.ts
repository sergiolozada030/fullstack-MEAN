import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import { FormComponent } from './shared/components/form/form.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TableComponent } from './pages/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    CreateProductComponent,
    EditProductComponent,
    HeaderComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
