import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginComponent} from './components/login/login.component';
import {PaymentsComponent} from './components/payments/payments.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ExtractosComponent } from './components/extractos/extractos.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'

/*
 */



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
	{path: 'login', component:LoginComponent},
    { path: 'pagos', component: PaymentsComponent },
    { path: 'extractos', component: ExtractosComponent },
    { path: 'productos', component: ProductsComponent },
    { path: 'detail/:id', component: ProductDetailComponent },
    { path: '**', component: NotFoundPageComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


