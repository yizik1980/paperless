import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  postUser(user:{name:string,email:string}){
    const {name, email} = user;
    return this.http.post<any>(environment.url,user);
  }
}
