import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogApiService } from '../services/catalog-api.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  base : string = "../../assets/images/"
  image : string = '';
  book : any;
  id : any;
  constructor(private catalogService:CatalogApiService,private _Activatedroute:ActivatedRoute,private router: Router) { }
  newBook = new FormGroup ({
    title: new FormControl(''),
    author: new FormControl(''),
    category: new FormControl(''),
    editor: new FormControl(''),
    numPages: new FormControl(''),
    image: new FormControl(''),
  });

  message:boolean=false
  notification:string=''

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id")  
    this.findById(this.id)
  }


  send(){
    if(this.newBook.value.title == this.book.title && this.newBook.value.author == this.book.author && this.newBook.value.category == this.book.category && this.newBook.value.editor == this.book.editor && this.newBook.value.numPages == this.book.numPages){
      let set = this
      this.notification = 'Niente da aggiornare!'
      this.message=true;
      setTimeout(function(){
       set.message=false;
      }, 1500)
    } else if(this.newBook.value.title != '' && this.newBook.value.author != '' && this.newBook.value.category != '' && this.newBook.value.editor != '' && this.newBook.value.numPages != ''){
          let body = JSON.parse('{"idBookCatalog":'+this.book.idBookCatalog+',"title":"'+this.newBook.value.title +'", "author":"'+this.newBook.value.author+'", "category":"'+this.newBook.value.category+'","editor":"'+this.newBook.value.editor+'","numPages":'+this.newBook.value.numPages+'}')  
          this.catalogService.updateCatalog(body)

          this.notification = 'Libro Aggiornato!'
          this.message=true;
          let set = this
          setTimeout(function(){
          set.message=false;
          set.router.navigate(['/book-details/'+set.book.idBookCatalog])
          }, 3000)
      //  this.utility.postData(this.myEndpoint, body)
        // console.log(body)-<
    }
    //  var set = this
    //  setTimeout(function () {
    //    set.router.navigate(['/book-details/'+set.book.idBookCatalog])
    //  },1000)
  }

  findById(id:number){
    this.catalogService.findById(id).subscribe(response => {
      this.book = response;
      
      console.log(this.book)
      this.image = this.base + this.book.bookImagePath
      
      this.newBook.setValue({
        title : this.book.title,
        author : this.book.author,
        editor : this.book.editor,
        category : this.book.category,
        numPages : this.book.numPages,
        image : this.book.bookImagePath
      });
    })
  }
}
