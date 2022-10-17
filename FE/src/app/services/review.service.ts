import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseURL : string = 'http://localhost:8080/review/'
  constructor(private http:HttpClient) { }

  submitReview(param:string,body:any){
      this.http.post(this.baseURL+'create/'+param,body).subscribe(r=>{
      console.log(r)
    })
  }
  deleteReview(id:number){
    this.http.delete(this.baseURL+'delete/'+id).subscribe(r=>{
      console.log(r)
    })
  }
}
