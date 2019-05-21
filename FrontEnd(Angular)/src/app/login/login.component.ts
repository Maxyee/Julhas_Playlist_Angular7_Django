import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../shared/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;
  constructor(private logService: LoginService,private toastr:ToastrService, private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();

    this.logService.formData = {
      username:'',
      password:'',
    }
  }

  onSubmit(form: NgForm){
    this.insertRecordGetToken(form);
  }

  // insertRecordGetToken(form: NgForm){
  //   if(form.value.username && form.value.password)
  //   {
  //     this.logService.logUser(form.value.username, form.value.password).subscribe((data:any)=>  {
  //         localStorage.setItem('userToken',data.key);
  //         this.router.navigate(['/home']);
  //     },
  //     (err:HttpErrorResponse)=>{
  //       this.isLoginError = true;
  //     });
  //   }

  // }

  insertRecordGetToken(form: NgForm){
    if(form != null)
    {
      this.logService.logUser(form.value).subscribe((data:any)=>  {
          localStorage.setItem('userToken',data.key);
          this.router.navigate(['/home']);
      },
      (err:HttpErrorResponse)=>{
        this.isLoginError = true;
      });
    }

  }

  // insertRecordGetToken(form: NgForm){
  //   this.logService.logUser(form.value).subscribe(res => {
  //       this.toastr.success("Registration Successfully",'User Added')
  //       this.resetForm(form);
  //   });
  // }


}
