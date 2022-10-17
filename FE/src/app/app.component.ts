import { Component, OnInit } from '@angular/core';
import { UserApiService } from './services/user-api.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // VARIABLES
  title = 'FidesProgettoFinale';
  message:boolean=false
  // per ora statiche ma che verranno prese da Login: 

  events: string[] = [];

  constructor(private user:UserApiService){}
  // ON INITIALIZATION
  ngOnInit(): void {

  }
 

    //  this.message=true;
        //  setTimeout(function(){
        //   set.message=false;
        //  }, 3000)
}

