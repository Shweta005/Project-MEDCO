import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDataList : any=[];
  productList= new BehaviorSubject<any>([]);
  constructor(private htppClient: HttpClient) { }

  getProductData(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product);
  }
//add to cart
  addToCart(product:any){
      this.cartDataList.push(product);
      this.productList.next(this.cartDataList);
      this.getTotalAmount();
      console.log(this.cartDataList);
  }
//get total amt
  getTotalAmount(){
    let grandTotal=0;
  this.cartDataList.map((a:any)=>{
    this.cartDataList += a.total;
  })
  }
 //remove one by one
  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id === a.id){
      this.cartDataList.splice(index,1)
    }
    })
  }

  //remove all from cart
 removeAllCart(){
   this.cartDataList=[]
   this.productList.next(this.cartDataList)
 }


}


