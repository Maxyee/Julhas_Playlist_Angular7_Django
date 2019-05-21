import { Injectable } from '@angular/core';
import { Register } from './register';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  formData:Register;

  readonly rootURL = "http://localhost:8000/rest-auth";

  constructor(private http:HttpClient) { }


  registerUser(formData:Register){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

      return this.http.post(this.rootURL+'/registration/',formData,httpOptions);
  }

}
