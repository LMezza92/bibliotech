import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book :any;
  id : number = 0;
  image : string = '';
  basePath : string = '../../assets/images/';
  constructor() { }

  ngOnInit(): void {
    this.id = this.book.idBookCatalog
    
    this.image = this.basePath + this.book.bookImagePath
    
  }

}
