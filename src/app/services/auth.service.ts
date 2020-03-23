import { Injectable } from '@angular/core';

import USERS from './../models/mock-users';
import { User } from '../models/interfaces';
import { Router } from '@angular/router';

export const TOKEN_NAME = 'jwt-token';
const USER_FIRST_NAME = 'UserFirstName';
const USER_LAST_NAME = 'UserLastName';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeToken = 'temporary fake token';

  constructor(private router: Router) { }

  // public setToken(token: string) {
  //   localStorage.setItem(TOKEN_NAME, token);
  // }

  // public getTokenExpirationDate(token: string): Date {
  //   const decoded = jwt_decode(token);

  //   if (decoded.exp === undefined) {
  //     return null;
  //   }

  //   const date = new Date(0);
  //   date.setUTCSeconds(decoded);
  //   return date;
  // }

  // public isTokenExpired(token?: string): boolean {
  //   if (!token) {
  //     token = this.getToken();
  //   }

  //   if (!token) {
  //     return true;
  //   }

  //   const date = this.getTokenExpirationDate(token);

  //   return date.getMilliseconds() < new Date().getMilliseconds();
  // }

  public login(email: string, password: string): boolean {
    if (this.checkUser(email, password)) {
      let user = this.getUserInfo(email);
      this.storeUserInfo(user);

      console.log('LOGIN SUCCESSFUL');
      this.router.navigate(['/Course']);

      return true;
    }
    console.log('LOGIN FAILED');
    return false;
  }

  public logout(): boolean {
    this.deleteUserInfo();
    this.router.navigate(['/Login']);
    return true;
  }

  public isAuthenticated(): boolean {
    if (this.getToken() != null) {
      return true;
    }

    return false;
  }

  public getUserInfo(email: string): User {
    const user = USERS.find((u) => u.email === email);

    return user;
  }

  private getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  private checkUser(email: string, password: string): boolean {
    const hasUser = USERS.some((u) => {
      if (u.email === email && u.password === password) {
        return true;
      }
    });

    return hasUser;
  }

  private storeUserInfo(user: User) {
    localStorage.setItem('UserFirstName', user.firstName);
    localStorage.setItem('UserLastName', user.lastName);
    localStorage.setItem(TOKEN_NAME, this.fakeToken);
  }

  private deleteUserInfo() {
    localStorage.removeItem(USER_FIRST_NAME);
    localStorage.removeItem(USER_LAST_NAME);
    localStorage.removeItem(TOKEN_NAME);
  }
}
