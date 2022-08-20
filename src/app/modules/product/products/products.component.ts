import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit , OnDestroy {
  sub!:Subscription;
  products!:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
  this.sub = this.productService.getProducts().subscribe(products =>{
      this.products = products;
  })
  }
  
  addToCart(productId:number){
    this.products = this.products.map(prod =>{
      if(prod.id == productId){
        return {
          ...prod,
          itemsCart:prod?.itemsCart ? prod?.itemsCart + 1 : 1 
        }
      }
      return prod;
    })
  }

  ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }

}
