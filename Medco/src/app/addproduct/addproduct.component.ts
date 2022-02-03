import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Icategory } from '../ICategory';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
 styleUrls: ['./addproduct.component.css'],

})
export class AddproductComponent implements OnInit {
title="Add Product"
public categories: Icategory[] = [];
addProductForm : FormGroup = new FormGroup({});





  constructor(private formBuilder : FormBuilder,private dataService: ProductService,private _snackBar: MatSnackBar,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
     this.addProductForm = this.formBuilder.group({
      'categoryName': [null]   // will use the property in html page
      })


    this.addProductForm = this.formBuilder.group({

      'productName': ['',[Validators.required,   Validators.pattern("^[0-9a-zA-Z]+$")]],
      'imgUrl':['',[Validators.required,  Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],
      'productDesc': ['',[Validators.required,  Validators.pattern("^[0-9a-zA-Z]+$")]],
      'categoryName':['',[Validators.required,  Validators.pattern("^[a-z]")]],
      'mfgName':['',[Validators.required,  Validators.pattern("^[a-z](pvt ltd)")]],
      'price':['',[Validators.required]],
    })
  }

   //Get all categories
     getCategories() {
    this.dataService
      .getCategories()
      .subscribe((allCategories) => (this.categories = allCategories));
  }


  addProduct(){
    return this.dataService.addProduct(this.addProductForm.value).subscribe(data=>{
     this._snackBar.open("Product added successfully!");
     console.log(data);
    }, err =>{
     this._snackBar.open("Insert data!!");
    });


  }

}
