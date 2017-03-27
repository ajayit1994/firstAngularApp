import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppProductCardComponent } from './shared/components/app-product-card/app-product-card/app-product-card.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { OrderByPipe } from './shared/pipes/order-by.pipe';;
import {AppProductService} from './shared/services/app-product.service';
import {InMemoryDataService} from './shared/services/in-memory-data.service';
import { RouterModule } from '@angular/router';
import { AppCartComponent } from './pages/app-cart/app-cart.component';
import { AppNotFoundComponent } from './pages/app-not-found/app-not-found.component';
// Routes
import { routes } from './app.routing';
import { AppCheckoutComponent } from './pages/app-checkout/app-checkout.component';
import { AppCheckoutSuccessComponent } from './pages/app-checkout-success/app-checkout-success.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppProductCardComponent,
    FilterPipe,
    OrderByPipe,
    AppCartComponent,
    AppNotFoundComponent,
    AppCheckoutComponent,
    AppCheckoutSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1500 }),
    RouterModule.forRoot(routes)
  ],
  providers: [AppProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
