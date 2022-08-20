import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'products',
    component:ProductComponent,
    children:[
      {
        path:'',
        component:ProductsComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
