import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import USERS from './../models/mock-users';
import { User } from '../models/interfaces';
import { TOKEN_NAME, USER_FIRST_NAME, USER_LAST_NAME, SERVER_URL } from '../models/const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth$: Subject<boolean> = new Subject();

  private fakeToken = 'temporary fake token';

  constructor(private router: Router) { }

  public login(email: string, password: string): void {

    const url = SERVER_URL + `/users?email=${email}`;

    fetch(url)
      // tslint:disable-next-line: no-shadowed-variable
      .then(response => response.json())
      .then(data => {
        if (data[0].password === password) {
          this.storeUserInfo(data[0]);
          this.isAuth$.next(true);
          this.router.navigate(['/Courses']);
        }
      });
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
// Delete?
  public getUserInfo(email: string): void {
    const url = SERVER_URL + `/users?email=${email}`;

    fetch(url)
    // tslint:disable-next-line: no-shadowed-variable
      .then(response => response.json())
      .then(data => {
        return data[0] as User; // ??
      });
  }

  private getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
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
