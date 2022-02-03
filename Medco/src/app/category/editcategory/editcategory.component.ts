import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  editCategoryForm: FormGroup = new FormGroup({});

  categoryDetails :any;
  id:any;
  dataLoaded: boolean = false;
  constructor(private dataService: ProductService,private _snackBar: MatSnackBar,private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.id =localStorage.getItem('catid');
    console.log("editcta"+this.id);
    this.dataLoaded = false;
     if(this.id !==''){
       //view user details
       this.dataService.getCategoryById(this.id)
       .toPromise()
       .then((data: any) =>{
         console.log(data);
         this.categoryDetails = data;
         Object.assign(this.categoryDetails,data);
         console.log(this.categoryDetails.catName);
         //Build edit form
         this.editCategoryForm = this.formBuilder.group({

          'catName' : new FormControl(this.categoryDetails.catName)

            //  'catName' : new FormControl(this.categoryDetails.catName),
           });
           this.dataLoaded = true;
       })
       .catch(err =>{
         console.log(err);
       })
     }
   }

   updateCategory(){
     console.log(this.categoryDetails.value)
    this.dataService.updateCategory(this.id,this.categoryDetails.value).subscribe(data=>{
      this._snackBar.open("Category added successfully!");
      console.log(data);
     }, err =>{
      this._snackBar.open("Unable to create category");
     });

   }
}

