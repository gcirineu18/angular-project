import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http'
import { SaleComponent } from './pages/sale/sale.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { MatchersJestComponent } from './matchers-jest/matchers-jest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListRenderComponent,
    SaleComponent,
    HeroesComponent,
    ChangeNumberComponent,
    MatchersJestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
