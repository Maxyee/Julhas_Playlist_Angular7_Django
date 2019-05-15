import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //constructor(private _djangoApiService: djangoApiService){}


  title = 'Julhas Playlist Solver';
  footer = 'Developed by Julhas'

  // listcategories:Categories[];

  // ngOnInit() {
  //     this._djangoApiService.getcategories()
  //     .subscribe
  //     (
  //         data=>
  //         {
  //             this.listcategories = data;
  //         }
  //     );
  // }
}
