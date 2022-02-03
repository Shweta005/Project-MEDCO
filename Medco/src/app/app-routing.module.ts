import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';

import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { CategorygridComponent } from './categorygrid/categorygrid.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { OrdergridComponent } from './ordergrid/ordergrid.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { ProductComponent } from './products/product/product.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CartComponent } from './user/cart/cart.component';
import { HomeComponent } from './user/home/home.component';


import { UsergridComponent } from './usergrid/usergrid.component';



const routes: Routes = [
  {path:"",redirectTo:"home/products",pathMatch:"full"},
  {path:"home",component: UserHomeComponent,
    children:[
      {path:"products",component:HomeComponent},
      {path:"product",component:ProductComponent},
      {path:"cart",component:CartComponent},
    ]
},


  // {path:"home",component:UserComponent},
  {path:"signup",component:SignupComponent},

  {path:"userlogin",component:LoginComponent},
  {path:"admin",component:AdminLoginComponent},
  {path:"adminhome",component:NavbarComponent,
        children : [
          {path:"viewusers",component:UsergridComponent},
          {path:"vieworders",component:OrdergridComponent},
          {path:"viewproducts",component:ProductgridComponent},
          {path:"viewcategories",component:CategorygridComponent},
          {path:"dashboard",component:DashboardComponent},
          {path:"addproduct",component:AddproductComponent},
          {path:"edit",component:EditcategoryComponent},
          {path:"addcategory",component:AddcategoryComponent}

        ]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
