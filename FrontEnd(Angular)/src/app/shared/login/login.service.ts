import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData:Login

  readonly rootURL = "http://localhost:8000/rest-auth";

   //------//

  constructor(private http:HttpClient) { }


  logUser(formData:Login){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    debugger

    // return this.http.post<{key: string}>(this.rootURL+'/login/',formData,httpOptions).pipe(tap(res => {
    //   localStorage.setItem('key', res.key)
    // }));
    return this.http.post(this.rootURL+'/login/',formData,httpOptions);

  }

  // logUser(username:string, password:string){
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     })
  //   }

  //   debugger
  //   return this.http.post(this.rootURL+'/login/',{username,password},httpOptions);
  // }

}
