import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../shared/videos/video.service';
import { CategorieService } from '../shared/categories/categorie.service';
import { Video } from '../shared/videos/video.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private vidservice:VideoService, private catservice:CategorieService,private toastr: ToastrService,private router:Router){}


  player: YT.Player;
  private id: string = 'ZWJH7JQCjLM';


  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  ngOnInit() {
    this.vidservice.refreshList();
  }

  //debugger
  populateForm(vid : Video){
    //debugger
    this.vidservice.formData = Object.assign({},vid);
  }


  onDelete(id : number){
    if(confirm('Are you sure to delete it??')){
      this.vidservice.deleteVideo(id).subscribe(res=>{
        this.vidservice.refreshList();
        this.toastr.warning('Deleted successfully', 'VID. Deleted')
        });
    }

  }

  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login'])
  }


}
