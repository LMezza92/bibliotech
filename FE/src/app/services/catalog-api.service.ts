import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {
  baseURL : string = 'http://localhost:8080/catalog/'
  find : string = 'find/'
  create : string = 'create/'
  delete : string = 'delete/'
  update : string = 'update'
  constructor(private http:HttpClient) { }

  createCatalog(body:string){
    // let body = '{"title":"'++'","author":"'++'","editor":"'++'","category":"'++'","numPages":"'++'","bookImagePath":"'++'"}'
    this.http.post(this.baseURL+'create', body).subscribe( response => {
      console.log("response: "+response)
    });
  }

  getCatalog(){
   return this.http.get(this.baseURL+this.find+'all')
  }

  findById(id:number){
    return this.http.get(this.baseURL+this.find+id)
  }
  findByTitle(title:string){
    return this.http.get(this.baseURL+this.find+'title/'+title)
  }
  findByCategory(category:string){
    return this.http.get(this.baseURL+this.find+'category/'+category)
  }
  findByAuthor(author:string){
    return this.http.get(this.baseURL+this.find+'author/'+author)
  }

  updateCatalog(body:any){
    this.http.post(this.baseURL+this.update, body).subscribe( response => {
      console.log(response)
    });
  }

  deleteCatalog(id:number){
    this.http.delete(this.baseURL+this.delete+id).subscribe(r=>{
      console.log(r)
    })

  }
  getCopies(){}
  
  

}
