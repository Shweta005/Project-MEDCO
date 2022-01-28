import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../IProduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit {
 title = "Product Details"
 products : Iproduct [] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(allProducts => this.products = allProducts );
  }
}
