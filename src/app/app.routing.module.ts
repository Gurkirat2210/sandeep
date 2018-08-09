import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
	 {
    path: '',
    component: MainpageComponent
  },
 {
    path: 'product-page',
    component: ProductPageComponent
  },
  
  {
    path: 'product-details',
    component: ProductDetailsComponent
  }, 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting {
}