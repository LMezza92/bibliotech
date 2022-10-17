import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userJson : any;
  isPremium : boolean = false;
  isAdmin : boolean = false;

  message:boolean=false
  notification:string=''
  constructor(private userService:UserApiService,private router:Router) { }

  signUpForm = new FormGroup ({
    username: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl('false'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  } );


  ngOnInit(): void {
    // this.user.findById(1).subscribe(r=> {
    //   console.log(r)
    // })
  }

  toJson(){
    if(this.signUpForm.value.type == 'premium'){
      this.isPremium = true
    } 
    this.userJson = JSON.parse('{"email":"'+this.signUpForm.value.email+'","username":"'+this.signUpForm.value.username+'","password":"'+this.signUpForm.value.password+'","isPremium":"'+this.isPremium+'","isAdmin":"'+this.isAdmin+'"}')
  }


  send(){
    if(this.signUpForm.value.username != '' && this.signUpForm.value.email != '' && this.signUpForm.value.password != ''){
      // CHECK IF EMAIL IS ALREADY IN DB +
      this.userService.findByEmail(this.signUpForm.value.email).subscribe(r=> {
        console.log(r)
        if(r == null){
          // CHECK IF PASSWORD IS THE SAME AS CONFIRM
          if(this.signUpForm.value.password == this.signUpForm.value.confirmPassword){
            this.toJson()
            this.userService.createUser(this.userJson)
            this.router.navigate(['/login'])

            // console.log(this.userJson)
            } else {
              let set = this
              this.notification = 'Password non coincidono'
              this.message=true;
              setTimeout(function(){
              set.message=false;
  
              }, 3000)
            }
        } else {
          let set = this
          this.notification = 'Utente già registrato con email: '+this.signUpForm.value.email
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

    // CHECK IF USERNAME IS ALREADY IN DB +
    // this.user.findByUsername(this.signUpForm.value.username).subscribe(r=> {
    //   console.log(r)
    // })


  }


  
}
