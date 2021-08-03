import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path: 'product-add', component: AddProductComponent },
  { path: 'product/:id/update', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
