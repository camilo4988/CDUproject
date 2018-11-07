import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component'
import { ProductService } from './components/product.service';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtractosComponent } from './components/extractos/extractos.component'

//import { ProductDetailComponent } from './product-detail/product-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginComponent,
    ProductsComponent,
    PaymentsComponent,
    NotFoundPageComponent,

    ProductDetailComponent,

    FooterComponent,

    ExtractosComponent
  
    //ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
    //ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



