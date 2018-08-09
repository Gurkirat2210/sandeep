import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {AppRouting} from './app.routing.module'
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ProductPageComponent
	  ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
	  AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
