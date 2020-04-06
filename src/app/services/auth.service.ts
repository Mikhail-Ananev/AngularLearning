import { Injectable } from '@angular/core';

import USERS from './../models/mock-users';
import { User } from '../models/interfaces';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

export const TOKEN_NAME = 'jwt-token';
const USER_FIRST_NAME = 'UserFirstName';
const USER_LAST_NAME = 'UserLastName';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth$: Subject<boolean> = new Subject();

  private fakeToken = 'temporary fake token';

  constructor(private router: Router) { }

  public login(email: string, password: string): boolean {
    if (this.checkUser(email, password)) {
      const user = this.getUserInfo(email);
      this.storeUserInfo(user);
      this.isAuth$.next(true);

      this.router.navigate(['/Courses']);

      return true;
    }

    return false;
  }

  public logout(): boolean {
    this.deleteUserInfo();
    this.isAuth$.next(false);

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
