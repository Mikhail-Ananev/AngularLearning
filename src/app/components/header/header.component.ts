import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { AppState, UserState } from '../../models/interfaces';
import { selectUser, selectUserAuthenticated } from '../../store/selectors/user.selectors';
import { InitUserInfo, ClearUserName } from '../../store/actions/user.action';

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
    public translateService: TranslateService
  ) { }

  public ngOnInit(): void {
    this.translateService.addLangs(['en', 'fr', 'ru']);

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

  public translate(lang: string) {
    this.translateService.use(lang);
  }
}
