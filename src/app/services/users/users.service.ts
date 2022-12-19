import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private username: String = '';


  constructor() { }

  public login(userName: String): void {
    this.username = userName;
  }

  public getUserName(): String {
    return this.username;
  }


}
