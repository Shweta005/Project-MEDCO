import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHandHoldingMedical, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { data } from 'jquery';
import { Icategory } from 'src/app/ICategory';
import { CartService } from 'src/app/services/cart.service';


import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
falogo = faHandHoldingMedical;
facart = faShoppingCart
totalItemNumber : number = 0;
categories: Icategory[] = [];


  constructor(private router : Router,private productService:ProductService,private cartService :CartService) { }
  login() : void{
    this.router.navigate(['/userlogin']);
    }

    register() : void{
      this.router.navigate(['/signup']);
      }


  ngOnInit(): void {
this.cartService.getProductData().subscribe(res =>{
  this.totalItemNumber = res.length;
})
    this.getCategories();
  }
  getCategories() {
    this.productService
      .getCategories()
      .subscribe((allCategories) => (this.categories = allCategories));
  }

}
