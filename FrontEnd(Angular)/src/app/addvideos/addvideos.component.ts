import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../shared/videos/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvideos',
  templateUrl: './addvideos.component.html',
  styleUrls: ['./addvideos.component.css']
})
export class AddvideosComponent implements OnInit {

  constructor(private vidservice: VideoService, private toastr: ToastrService, private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();

    this.vidservice.formData = {
      id:null,
      video_title: '',
      video_description: '',
      video_url: '',
      categories: '',
      created_at: null,
      updated_at: null,
      user: null,
    }
  }


  onSubmit(form: NgForm){
    if(form.value.id == null)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }


  insertRecord(form: NgForm){
    this.vidservice.postVideo(form.value).subscribe(res => {
        this.toastr.success("Inserted Successfully",'VID. Added')
        this.resetForm(form);
        this.vidservice.refreshList();
    });
  }

  updateRecord(form: NgForm){
      this.vidservice.putVideo(form.value).subscribe(res => {
        this.toastr.warning("Updated Successfully",'VID. updated')
        this.resetForm(form);
        this.vidservice.refreshList();
    });
  }


  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login'])
  }

}
