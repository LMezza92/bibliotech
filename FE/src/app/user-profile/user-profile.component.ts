import { Component, OnInit, Output } from '@angular/core';
import { BookApiService } from '../services/book-api.service';
import { CatalogApiService } from '../services/catalog-api.service';
import { LoginService } from '../services/login.service';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  catalog:any[] =[];
  reply:any;
  userDetails:any
  username:string=''
  books:any
  email:string=''
  idUser:number=0
  isLogged:boolean=false
  isAdmin:boolean=false
  isPremium:boolean=false
  message:boolean=false
  notification:string=''

  constructor(private login:LoginService, 
              private user:UserApiService, 
              private catalogService:CatalogApiService, 
              private bookService:BookApiService,
              private loginStatus:LoginService) { }

  ngOnInit(): void {
    this.getUserData()
  }


  getUserData(){
    this.user.findById(this.login.userId).subscribe(r=>{
       console.log(r)
      this.userDetails=r
      this.idUser = this.userDetails.idUser
      this.username = this.userDetails.username
      this.books = this.userDetails.books
      this.email = this.userDetails.email
      this.isLogged = this.loginStatus.isLogged
      this.isPremium = this.userDetails.isPremium
      this.isAdmin = this.userDetails.isAdmin
      
      // for(let b of this.books){
      //   this.catalog.push(b.idCatalog)
      // }
      // console.log(this.catalog)
    })
  }

  // findCatalog(id:number){
  //     this.catalogService.findById(id).subscribe(r=>{
  //       this.reply=r
  //       this.catalog.push(this.reply)
  //     })
  // }
 
  returnBook(data:any){
         this.books.slice(this.books.indexOf(data))
         console.log(this.books.indexOf(data))
         this.bookService.returnBook(data.idBook, this.idUser)
        
         let set = this
        
          this.notification = 'Libro Restituito. Grazie!'
           this.message=true;
           setTimeout(function(){
            set.message=false;
            set.getUserData()
           }, 3000)
          // this.messageService.message = 'Libro Restituito. Grazie!'
          // this.message=true;
          // setTimeout(function(){
          //  set.message=false;
          // }, 3000)

         //this.getUserData()
    //  console.log(data)
  }

  renewBook(b:any){
    var d = new Date(b.endDate)
    let newEndDate 

    if (d.getMonth()+1 >= 12){
      newEndDate = d.getFullYear()+'-'+1+'-'+d.getDate()
    }else{newEndDate = d.getFullYear()+'-'+(d.getMonth() +2)+'-'+d.getDate()}

    console.log(b.idBook+'/'+newEndDate)
    this.bookService.renewBook(b.idBook, newEndDate)

    this.notification = 'Libro Rinnovato!'

    let set = this
    this.message=true;
    setTimeout(function(){
      set.message=false;
      set.getUserData()
    }, 3000)
  }
}
