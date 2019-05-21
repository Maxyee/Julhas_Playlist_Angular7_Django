import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Register } from '../shared/register/register';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../shared/register/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  model: any = {};
  //model:Register[];
  form : Register;

  //model:Register = {}

  constructor(private regservice:RegisterService,private toastr: ToastrService) { }

  ngOnInit() {
      this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();

    this.regservice.formData = {
      username:'',
      email:'',
      password1:'',
      password2:'',
    }
  }

  onSubmit(form: NgForm){
      this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    this.regservice.registerUser(form.value).subscribe(res => {
        this.toastr.success("Registration Successfully",'User Added')
        this.resetForm(form);
    });
  }

}




