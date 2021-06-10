import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(user: User){

  let users=[];
  if(localStorage.getItem('Users')) {

    users = JSON.parse(localStorage.getItem('Users'));
    users = [...users, user];
  }else{
    users.push(user);
  }

  console.log(users);
  localStorage.setItem('Users', JSON.stringify(users));
}
}
