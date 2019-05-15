import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Headers } from '@angular/http';

@Injectable()
export class djangoApiService{

    constructor(private httpclient: HttpClient ){ }




    getcategories():Observable<any> {

      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token 4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4',
          'Content-Type': 'application/json' })
      }

      return this.httpclient.get("http://localhost:8000/api/v1/categories/", httpOptions);
    }

    // createAuthorizationHeader(headers:HttpHeaders){
    //   let token = "4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4"
    //   headers.append('Authorization', "Token " + token)
    //   // headers.append('Content-Type', 'application/json')
    //   // headers.append('Accept', 'application/json')
    // }

    // getcategories():Observable<any> {
    //    let headers = new HttpHeaders();
    //    let token = "4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4"
    //    headers.append('Authorization', "Token " + token)
    //    this.createAuthorizationHeader(headers);
    //    return this.httpclient.get("http://localhost:8000/api/v1/categories",{
    //      headers:headers
    //    });
    // }

    // getcategories():Observable<any> {

    //   const httpOptions = {headers: new HttpHeaders({ 'Authorization': 'Token 4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4', 'Content-Type': 'application/json' })}


    //    let headers = new HttpHeaders();
    //    let token = 'Token 4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4';
    //    headers.append('Authorization', token)
    //    console.log(headers.get('Authorization'))
    //    return this.httpclient.get("http://localhost:8000/api/v1/categories/", httpOptions);
    // }


    // getcategories():Observable<any> {
    //    const httpOptions = {headers: new HttpHeaders({ 'Authorization': 'Token 4adf3d9cfa4d1efd4ec3dace664e6061110fe0f4', 'Content-Type': 'application/json' })}
    //    return this.httpclient.get("http://localhost:8000/api/v1/categories/", httpOptions);
    // }





}
