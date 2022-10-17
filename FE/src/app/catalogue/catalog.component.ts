import { Component, OnInit } from '@angular/core';
import { CatalogApiService } from '../services/catalog-api.service';
import { LoginService } from '../services/login.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogComponent implements OnInit {
  default: any = JSON.parse(  '{"author": "Sally Rooney","bookImagePath": "default.jpg","category": "Romanzo","editor": "Einaudi","idBookCatalog": 11,"numCopies": 3,"numPages": 304,"review": [],"title": "Parlare tra amici"}')

  books : any = [this.default,this.default,this.default,this.default,this.default,this.default,this.default,this.default];









  n:number=0;
  constructor(private catalog:CatalogApiService, private searchService:SearchService, private loginStatus:LoginService) { }

  ngOnInit(): void {
   
    let set = this
    setInterval(function(){
      set.books= set.searchService.books
      set.n = Object.keys(set?.books).length
    },200)
  
    
    
  }

  // getAllBooks(){
  //   this.catalog.getCatalog().subscribe(response =>{
  //     this.books = response;
  //     // console.log(this.books[0].bookImagePath)
  //   });
  // }

}
