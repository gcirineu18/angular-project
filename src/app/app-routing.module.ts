import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './page/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';

const routes: Routes = [
  {
    path: 'products',
    component: HomeComponent
  },
  {
    path: 'cart',
    component:CartComponent
  },
  {
    path: 'sale',
    component:SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }