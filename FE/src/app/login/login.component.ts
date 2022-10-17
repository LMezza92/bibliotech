import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLog:any;

  constructor(private user:UserApiService,private router: Router,private loginStatus:LoginService) { }
  logInForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
  } );
  message:boolean=false
  notification:string=''
  ngOnInit(): void {
    
  }
  
  send(){
    if(this.logInForm.value.email != '' && this.logInForm.value.password != ''){
      // FIND USER BY EMAIL
      this.user.findByEmail(this.logInForm.value.email).subscribe(r=>{
        this.userLog = r
        
        if(r != null){
          // IF PASSWORD IS CORRECT SET LOGIN VARIABLES
          if(this.userLog.password == this.logInForm.value.password){
            
            this.loginStatus.isLogged = true
            this.loginStatus.isPremium = this.userLog.isPremium
            this.loginStatus.isAdmin = this.userLog.isAdmin
            this.loginStatus.userId = this.userLog.idUser
            this.loginStatus.userName = this.userLog.userName
            this.router.navigate(['/user-profile'])
            // console.log("logged in")
            // console.log(this.loginStatus.userId)
            
            // localStorage.setItem('isLogged', 'true')
            // localStorage.setItem('username', this.userLog.username)
            // localStorage.setItem('isAdmin', this.userLog.isAdmin)
            // localStorage.setItem('isPremium', this.userLog.isAdmin)
            // console.log("LOGGED"+this.userLog.isAdmin)
            
            
          } else {
            let set = this
            this.notification = 'Password Errata'
            this.message=true;
            setTimeout(function(){
            set.message=false;
            }, 3000)
          }
        } else {
          let set = this
          this.notification = 'Credenziali Incorrette'
          this.message=true;
          setTimeout(function(){
          set.message=false;
          }, 3000)
        }
      })
    } else {
      let set = this
      this.notification = 'Compila tutti i campi'
      this.message=true;
      setTimeout(function(){
      set.message=false;
      }, 3000)
    }
  }
}
