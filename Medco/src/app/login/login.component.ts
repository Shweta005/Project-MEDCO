
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginform: FormGroup = new FormGroup({});



  constructor(private formBuilder : FormBuilder,private dataService: UserServiceService,private router: Router ) { }




  ngOnInit(): void {

    this.loginform = this.formBuilder.group({
      'email' : new FormControl(''),
      'password' : new FormControl('')
    })
    }

    login(){
       this.dataService.login(this.loginform.value).subscribe(res=>{
        const data = res.find((a:any)=>{

          return a.email === this.loginform.value.email && a.password === this.loginform.value.password;
      })
      if(data){
        alert("login is successfull");
        this.loginform.reset();
        this.router.navigate(['/home/products'])
      }else{
        alert("user not found !!")
      }



      })


    }





    }
