import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { UserName } from '../../models/interfaces';

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
    this.userNameInfo = 'Login';

    this.subscriptions.add(this.authService.isAuth$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
    }));

    this.subscriptions.add(this.authService.userName$.subscribe((userName) => {
      this.userNameInfo = userName.firstName + userName.lastName;
      console.dir(this.userNameInfo);
      console.dir(userName);
    }));
  }

  public logOff() {
    this.authService.logout();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
