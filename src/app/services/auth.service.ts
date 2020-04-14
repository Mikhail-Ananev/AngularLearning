import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { User, UserName } from '../models/interfaces';
import { TOKEN_NAME, USER_FIRST_NAME, USER_LAST_NAME, SERVER_URL } from '../models/const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth$: Subject<boolean> = new Subject();
  public userName$: Subject<UserName> = new Subject();

  private fakeToken = 'temporary fake token';

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public login(email: string, password: string) {
    if (password && email) {
      this.getUserInfo(email).subscribe(user => {
        const userInfo = user[0];

        if (userInfo.password === password) {
          this.storeUserInfo(userInfo);
          this.isAuth$.next(true);
          this.userName$.next({
            firstName: userInfo.firstName,
            lastName: userInfo.lastName
          });

          this.router.navigate(['/Courses']);
        }
      });
    }
  }

  public getUserInfo(email: string): Observable<User> {
    const url = SERVER_URL + `/users?email=${email}`;

    return this.http.get<User>(url);
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

  public deleteUserInfo() {
    localStorage.removeItem(USER_FIRST_NAME);
    localStorage.removeItem(USER_LAST_NAME);
    localStorage.removeItem(TOKEN_NAME);

    this.userName$.next({ firstName: 'Login', lastName: '' });
  }

  private getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  private storeUserInfo(user: User) {
    localStorage.setItem('UserFirstName', user.firstName);
    localStorage.setItem('UserLastName', user.lastName);
    localStorage.setItem(TOKEN_NAME, this.fakeToken);
  }
}
