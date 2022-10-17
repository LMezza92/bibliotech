import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userId : number = 0;
  userName = '';
  isLogged = false;
  isPremium = false;
  isAdmin = false;
  constructor() { }
}
