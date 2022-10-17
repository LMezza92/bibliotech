import { Component, OnInit, Output } from '@angular/core';
import { CatalogApiService } from '../services/catalog-api.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../services/book-api.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  isLogged:boolean=false
  isPremium:boolean=false
  isAdmin:boolean=false

  base : string = "../../assets/images/"
  image : string = '';
  book : any;
  id : any;
  // numCopies:number=0;
  events: string[] = [];
  reviews:any;
  startDate : string = '';
  endDate : string = '';
  dateSelected:boolean=false
  writeReview:boolean=false;
  reviewForm = new FormGroup ({
    content: new FormControl(''),
    star: new FormControl(''),
  } );

  message:boolean=false
  notification:string=''

  constructor(private catalogService:CatalogApiService, private bookService:BookApiService, private _Activatedroute:ActivatedRoute, private loginStatus:LoginService, private router:Router, private reviewService:ReviewService) { }

  ngOnInit(): void {
    // let now:Date = new Date
    // console.log(now)

    this.id=this._Activatedroute.snapshot.paramMap.get("id")  
    this.findById(this.id)
     let set = this
     setInterval(function(){
       set.isAdmin= set.loginStatus.isAdmin
       set.isPremium= set.loginStatus.isPremium
       set.isLogged= set.loginStatus.isLogged

     },100)
    
  }

  findById(id:number){
    this.catalogService.findById(id).subscribe(response => {
      this.book = response;
      this.reviews=this.book.review
      this.image = this.base + this.book.bookImagePath
      // this.numCopies = this.book.numCopies
      console.log(this.book)
    })
  }

  createBookEntity(){
    this.bookService.createBook(this.id)
    let set = this
    setTimeout(function(){
      set.findById(set.id)
    },500)
    this.notification = 'Aggiunto a Catalogo!'
    this.message=true;
    setTimeout(function(){
     set.message=false;
    }, 3000)
   
  }
  deleteCatalog(){
    this.catalogService.deleteCatalog(this.id)
    let set = this
    this.notification = 'Eliminato dal catalogo!'
    this.message=true;
    setTimeout(function(){
     set.message=false;
     set.router.navigate(['/catalog'])
    }, 3000)
    
  }
  // getAllBooks(){
  //   this.catalog.getCatalog().subscribe(response =>{
  //     this.myResponse = response;
  //      console.log(response)
  //   });
  // } 
  borrowBook(){
    this.bookService.borrowBook(this.book.idBookCatalog,this.loginStatus.userId,this.startDate,this.endDate)
    let set = this
    setTimeout(function(){
      set.findById(set.id)
    },500)
    this.notification = 'Prenotato!'
    this.message=true;
    setTimeout(function(){
     set.message=false;
    }, 3000)
    // let set = this
    // setTimeout(function(){
    //   set.findById(set.id)
    // },1000)
   
    // console.log(this.date)
    // console.log(this.book.idBookCatalog)
    // console.log(this.userStatus.userId)
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {

    this.events.push(type+event.value);
    var d = new Date(type+event.value)

    this.dateSelected = true
    console.log(this.dateSelected)
    this.startDate = d.getFullYear()+'-'+(d.getMonth() +1)+'-'+d.getDate()
    if (d.getMonth()+1 >= 12){
      this.endDate = d.getFullYear()+'-'+1+'-'+d.getDate()
    }else{this.endDate = d.getFullYear()+'-'+(d.getMonth() +2)+'-'+d.getDate()}
    


    // console.log(this.events);
    // console.log("giorno settimana = " + d.getDay());
    // console.log("data = " + d.getDate());
    // console.log("mese = " + (d.getMonth() +1));
    // console.log("anno = " + d.getFullYear());
   }

  toggleReview(){
    this.writeReview = !this.writeReview
  }

  submitReview(){
    if(this.reviewForm.value.content != ''){
      let body = JSON.parse('{"review":"'+this.reviewForm.value.content+'","rating":'+this.reviewForm.value.star+'}')
      console.log(body)
      this.reviewService.submitReview(this.id,body)

      let set = this
      setTimeout(function(){
        set.writeReview = !set.writeReview
        set.findById(set.id)
      },500)

      this.notification = 'Review Aggiunta!'
      this.message=true;
      setTimeout(function(){
      set.message=false;
      }, 3000)
      // console.log(this.reviewForm.value)
    }
   }
   deleteReview(id:number){
      this.reviewService.deleteReview(id)
      let set = this
      setTimeout(function(){
        set.findById(set.id)
      },500)

      this.notification = 'Review eliminata!'
      this.message=true;
      setTimeout(function(){
       set.message=false;
      }, 3000)
  }

}
