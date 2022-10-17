import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  baseURL : string = 'http://localhost:8080/user/'
  find : string = 'find/'
  httpHeaders= {
    headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,POST,DELETE,PUT,OPTIONS',
    'Content-Type':'application/json',
    })
  };
  constructor(private http:HttpClient) { }

  findById(id:number){
    return this.http.get(this.baseURL+this.find+id, this.httpHeaders)
  }
  findByEmail(email:string){
    return this.http.get(this.baseURL+this.find+'email/'+email, this.httpHeaders)
  }
  findByUsername(username:string){
    return this.http.get(this.baseURL+this.find+'username/'+username, this.httpHeaders)
  }
  createUser(user:any){
    this.http.post(this.baseURL+'create', user).subscribe( response => {
      console.log(response)
    });
  }
  upgradeMembership(user:any){}
  updateUser(user:any){}

}
