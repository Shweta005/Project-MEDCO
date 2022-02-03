import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { data } from 'jquery';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
fasync = faSync
fatrash =faTrash
products :any = [];
allProducts:any = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res=>{
      this.products = res;
      this.allProducts=this.cartService.getTotalAmount();
    })

  }

   removeProduct(item:any){
     this.cartService.removeCartData(item);
   }
   removeAllProduct(){
     this.cartService.removeAllCart();
   }
}
