import { Injectable } from '@angular/core';
import { Video } from './video.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {



  formData:Video;

  list: Video[];

  readonly rootURL = "http://localhost:8000/api/v1";

  constructor(private http: HttpClient) { }

  postVideo(formData:Video){
    //Token 4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4
    var token = localStorage.getItem('userToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+token,
        'Content-Type': 'application/json' })
    }

    return this.http.post(this.rootURL+'/videos/',formData,httpOptions);
  }


  refreshList(){
    var token = localStorage.getItem('userToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+token,
        'Content-Type': 'application/json' })
    }

    this.http.get(this.rootURL+'/videos',httpOptions)
    .toPromise().then(res => this.list  = res['results'] as Video[])
  }


  putVideo(formData:Video){
    var token = localStorage.getItem('userToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+token,
        'Content-Type': 'application/json' })
    }

    //debugger
    return this.http.put(this.rootURL+'/videos/'+formData.id, formData, httpOptions);
  }

  deleteVideo(id: number){
    var token = localStorage.getItem('userToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+token,
        'Content-Type': 'application/json' })
    }

    return this.http.delete(this.rootURL+'/videos/'+id,httpOptions);
  }
}
