import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  baseURL : string = 'http://localhost:8080/'
  book : string = 'book/'
  catalog : string = 'catalog/'
  borrow : string = 'borrow/'
  return : string = 'return/'
  renew : string = 'renew/'


  
  constructor(private http:HttpClient) { }


   createBook(idCatalog:number){
    this.http.post(this.baseURL+this.book+'create/'+idCatalog, '').subscribe( response => {
      console.log("response: "+response)
    });
     console.log(this.baseURL+this.book+'create/'+idCatalog, '')
   }

  borrowBook(idCatalog:number,idUser:number, startDate:string, endDate:string){ //?idCatalog=5&idUser=1
    let url = this.baseURL+this.book+this.borrow+idCatalog+'/'+idUser+'/'+startDate+'/'+endDate
    this.http.post(url,'').subscribe( response => {
      console.log("response: "+response)
    });
    // console.log(this.baseURL+'{"idCatalog":"'+idCatalog+'","idUser":"'+idUser+'"}')
    // console.log('?idCatalog='+idCatalog+'&idUser='+idUser)
    // console.log(this.baseURL+this.borrow+'?idCatalog='+idCatalog+'&idUser='+idUser,'',this.httpHeaders)
    console.log(url)
  }

  returnBook(idBook:number,idUser:number){
    let url = this.baseURL+this.book+this.return+idBook+'/'+idUser
    this.http.post(url,'').subscribe( response => {
      console.log("response: "+response)
    });
  }
  
  renewBook(idBook:number, endDate:string){
    let url = this.baseURL+this.book+this.renew+idBook+'/'+ endDate
    this.http.post(url,'').subscribe( response => {
      console.log("response: "+response)
    });
  }
  
}
