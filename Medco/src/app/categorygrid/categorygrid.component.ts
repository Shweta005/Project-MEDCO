import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { data } from 'jquery';


import { Icategory } from '../ICategory';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-categorygrid',
  templateUrl: './categorygrid.component.html',
  styleUrls: ['./categorygrid.component.css'],
})
export class CategorygridComponent implements OnInit {
  title = 'Category List';
  categories: Icategory[] = [];
  categoryDetails:any;
   editForm: FormGroup= new FormGroup({});
   id:any;
  constructor(
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private formBuilder : FormBuilder,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  //Get all categories
  getCategories() {
    this.productService
      .getCategories()
      .subscribe((allCategories) => (this.categories = allCategories));
  }

  //Delete Selected category
  deleteCategory(category: any) {
    let id = category.id;
    if (id) {
      this.productService.deleteCategory(id).subscribe(
        (data) => {
          this._snackBar.open(
            `Category ${category.catName} deleted successfully!`
          );
          console.log(data);
        },
        (err) => {
          this._snackBar.open('Unable to delete category');
        }
      );
    }
  }

 editCategory(category: any) {
    let id = category.id;
    localStorage.setItem('catid',id);
    console.log(id);
    this.router.navigate(['/adminhome/edit']);
  }


    }

