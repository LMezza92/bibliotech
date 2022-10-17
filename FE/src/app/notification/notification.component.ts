import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input()  message:string= ''
  open : boolean=false;
  constructor() { }
  ngOnInit(): void {
    let set = this
    setTimeout(function(){
      set.open=true
    },50)  
   

  
    setTimeout(function(){
      set.open=false
    },2000)
  }

}
