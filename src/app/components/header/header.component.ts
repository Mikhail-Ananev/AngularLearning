import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { AppState, UserState } from '../../models/interfaces';
import { Store, select } from '@ngrx/store';
import { selectUser, selectUserAuthenticated } from 'src/app/store/selectors/user.selectors';
import { InitUserInfo, ClearUserName } from 'src/app/store/actions/user.action';

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
    private store$: Store<AppState>,
  ) { }

  public ngOnInit(): void {
    this.store$.dispatch(InitUserInfo());
    this.store$.pipe(select(selectUserAuthenticated))
      .subscribe(isAuth => this.isAuthenticated = isAuth);

    this.subscriptions.add(this.store$.pipe(select(selectUser))
      .subscribe((user) => {
        this.setUserName(user);
      }));
  }

  public logOff() {
    this.store$.dispatch(ClearUserName());
  }

  public setUserName(user: UserState) {
    if (user.isAuthenticated) {
      this.userNameInfo = `${user.currentUserName.firstName} ${user.currentUserName.lastName}`;
    } else {
      this.userNameInfo = '';
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
