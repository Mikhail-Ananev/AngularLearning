import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User, UserName } from '../models/interfaces';
import { TOKEN_NAME, USER_FIRST_NAME, USER_LAST_NAME, SERVER_URL } from '../models/const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeToken = 'temporary fake token';

  constructor(
    private http: HttpClient
  ) { }

  public getUserInfo(email: string): Observable<User> {
    const url = SERVER_URL + `/users?email=${email}`;

    return this.http.get<User>(url);
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
  }

  private getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  public storeUserInfo(user: UserName) {
    localStorage.setItem('UserFirstName', user.firstName);
    localStorage.setItem('UserLastName', user.lastName);
    localStorage.setItem(TOKEN_NAME, this.fakeToken);
  }

  public getStoredUserInfo(): UserName {
    return {
      firstName: localStorage.getItem('UserFirstName'),
      lastName: localStorage.getItem('UserLastName'),
    };
  }
}
