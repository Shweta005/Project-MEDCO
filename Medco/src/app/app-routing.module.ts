import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdergridComponent } from './ordergrid/ordergrid.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { UsergridComponent } from './usergrid/usergrid.component';

const routes: Routes = [
  {path:"",redirectTo:"adminlogin",pathMatch:"full"},
  {path:"adminlogin",component:AdminLoginComponent},

  {path:"admin",component:NavbarComponent,
        children : [
          {path:"viewusers",component:UsergridComponent},
          {path:"vieworders",component:OrdergridComponent},
          {path:"viewproducts",component:ProductgridComponent},
          {path:"dashboard",component:DashboardComponent},
          {path:"addproduct",component:AddproductComponent},
          {path:"addcategory",component:AddcategoryComponent},
        ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
