import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogApiService } from '../services/catalog-api.service';
import { LoginService } from '../services/login.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  isAdmin:boolean=false
  isPremium:boolean=false
  result:any;
  searchInput = new FormControl('')
  searchCategoryInput = new FormControl('')
  searchAuthorInput = new FormControl('')

  constructor(private searchService:SearchService,private catalogService:CatalogApiService, private router:Router, private loginStatus:LoginService) { }

  ngOnInit(): void {
    this.getAllBooks()
    this.isPremium = this.loginStatus.isPremium
    this.isAdmin = this.loginStatus.isAdmin
  }
  getAllBooks(){
    this.catalogService.getCatalog().subscribe(r =>{
      this.searchService.books = r
    });
  }
  
  search(){
    if(this.searchInput.value != ''){
      this.catalogService.findByTitle(this.searchInput.value).subscribe(r =>{
        this.result=r
        console.log(r)  
        if(r==null)console.log("no book found with title: "+this.searchInput.value )
        this.searchService.books = r
        // else this.router.navigate(['/book-details/'+this.result.idBookCatalog])
        // console.log(this.books[0].bookImagePath)
      });
    }
  }

  searchCategory(){
      if(this.searchCategoryInput.value != ''){
      this.catalogService.findByCategory(this.searchCategoryInput.value).subscribe(r=>{
        this.searchService.books = r
        console.log(this.searchService.books )
        // this.router.navigate(['/catalog'])

      })
    }
  }

  searchAuthor(){
    if(this.searchAuthorInput.value != ''){
      this.catalogService.findByAuthor(this.searchAuthorInput.value).subscribe(r=>{
        this.searchService.books = r
        console.log(this.searchService.books )
        // this.router.navigate(['/catalog'])

      })
    }
  }
}
