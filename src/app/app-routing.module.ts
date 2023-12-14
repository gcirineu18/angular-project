import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

import { SaleComponent } from './pages/sale/sale.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {
    path: 'products',
    component: HomeComponent,
    
  },
    {
      path: 'list',
      component: ListRenderComponent
    },
  {
    path: 'sale',
    component:SaleComponent
  },
  {
    path: 'heroes',
    component:HeroesComponent
  },
  {
    path: 'list/:id',
    component:ItemDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
