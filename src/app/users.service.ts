import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [];

  constructor() { }

  UsersStore(value) {
    console.log(value);
    this.users.push(value);
  }
}
