import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { CatalogApiService } from '../services/catalog-api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isAdmin = false;
  menuIsOpen : boolean = false;
  constructor(private catalogue:CatalogApiService) { }

  image : string = ''
  base : string = '../../assets/images/'
  books :any;
  vetrina:any=[];
  ngOnInit(): void {
    this.catalogue.getCatalog().subscribe(r =>{
      this.books = r;
      for(let i=0;i<4;i++){
        this.vetrina.push(this.books[i+5]) 
       }
      this.image = this.base + this.books[9].bookImagePath
    })

     let set = this
     let x = 0
     setInterval(function(){
       if(x >= 5){x=0}
       set.image = set.base + set.books[x+10].bookImagePath
       x++
     },4000)

 
  }
}
