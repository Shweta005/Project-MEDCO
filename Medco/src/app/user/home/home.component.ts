import { Component, OnInit } from '@angular/core';
import { Ihome } from 'src/app/IHome';
import* as $ from 'jquery'
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Ihome [] = [];
  productList: any;
  constructor(private homeService: HomeService,private router:Router,private cartService : CartService) { }


  ngOnInit(): void {
   // this.getProducts();
  this.homeService.getProducts().subscribe(res=>{
    this.productList = res;
    this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
    });
  })


  }

// getProducts(){
//   this.homeService.getProducts().subscribe(allProducts => this.products = allProducts   );
// }


  myFunc(){
    this.router.navigate((['/home/product']))
  }

  addtoCart(item:any){
    this.cartService.addToCart(item);
  }


}
