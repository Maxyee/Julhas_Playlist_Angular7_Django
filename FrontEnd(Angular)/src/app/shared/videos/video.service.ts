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
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token 4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4',
        'Content-Type': 'application/json' })
    }

    // const formFile :Video = new Video();
    // formFile.append('video',formData.file,formData.video_title)


    return this.http.post(this.rootURL+'/videos/',formData,httpOptions);
  }


  refreshList(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token 4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4',
        'Content-Type': 'application/json' })
    }

    this.http.get(this.rootURL+'/videos',httpOptions)
    .toPromise().then(res => this.list  = res['results'] as Video[])
  }


  putVideo(formData:Video){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token 4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4',
        'Content-Type': 'application/json' })
    }

    //debugger
    return this.http.put(this.rootURL+'/videos/'+formData.id, formData, httpOptions);
  }

  deleteVideo(id: number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token 4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4',
        'Content-Type': 'application/json' })
    }

    return this.http.delete(this.rootURL+'/videos/'+id,httpOptions);
  }
}
