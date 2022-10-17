import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookApiService } from '../services/book-api.service';
import { CatalogApiService } from '../services/catalog-api.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  constructor(private book:BookApiService, private catalog:CatalogApiService) { }
  
  newBook = new FormGroup ({
    title: new FormControl(''),
    author: new FormControl(''),
    category: new FormControl(''),
    editor: new FormControl(''),
    numPages: new FormControl(''),
    image: new FormControl(''),
  } );
  message:boolean=false
  notification:string=''

  ngOnInit(): void {

  }

  send(){
    if(this.newBook.value.title != '' && this.newBook.value.author != '' && this.newBook.value.category != '' && this.newBook.value.image != '' ){
      let body = JSON.parse('{"title":"'+this.newBook.value.title+'","author":"'+this.newBook.value.author+'","editor":"'+this.newBook.value.editor+'","category":"'+this.newBook.value.category+'","numPages":'+this.newBook.value.numPages+',"bookImagePath":"'+this.newBook.value.image+'"}')
      this.catalog.createCatalog(body)
      let set = this
      this.notification = 'Nuovo Libro Aggiunto a Catalogo!'
      this.message=true;
      setTimeout(function(){
       set.message=false;
      }, 3000)
    }
  }
}
