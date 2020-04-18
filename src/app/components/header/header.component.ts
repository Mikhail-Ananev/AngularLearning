import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { UserName } from '../../models/interfaces';
import { USER_FIRST_NAME, USER_LAST_NAME } from 'src/app/models/const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;
  public userNameInfo: string;
  public faSignOutAlt = faSignOutAlt;
  public faUser = faUser;

  private subscriptions = new Subscription();

  constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.setUserName();

    this.subscriptions.add(this.authService.isAuth$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
      this.setUserName();
    }));
  }

  public logOff() {
    this.authService.logout();
  }

  public setUserName() {
    if (this.isAuthenticated) {
      this.userNameInfo = `${localStorage.getItem(USER_FIRST_NAME)} ${localStorage.getItem(USER_LAST_NAME)}`;
    } else {
      this.userNameInfo = '';
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
