import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged : boolean = false
  isPremium : boolean = false
  isAdmin : boolean = false
  menuIsOpen : boolean = false;
  constructor(private loginStatus:LoginService, private router:Router) { }

  ngOnInit(): void {
    // let session : any = localStorage.getItem('isAdmin')?.toLowerCase();
    //   if(session == 'true' ){
    //     this.isAdmin = true;
    //   }
    let set = this
    setInterval(function(){
      set.isAdmin= set.loginStatus.isAdmin
      set.isPremium= set.loginStatus.isPremium
      set.isLogged= set.loginStatus.isLogged

    },100)
      
  }
  getStatus(){
    
  }
  toggleMenu(){
    this.menuIsOpen = !this.menuIsOpen;
  }
  logOut(){
    this.loginStatus.isLogged = false
    this.loginStatus.isPremium = false
    this.loginStatus.isAdmin = false
    this.loginStatus.userId = 0
    this.loginStatus.userName = ''
    this.router.navigate(['/']);
   }
  // logOut(){
  //   localStorage.setItem('isAdmin', 'false')
  //   localStorage.removeItem('username')
  //   // this.router.navigate(['/']);
  // }
}
