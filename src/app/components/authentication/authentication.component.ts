import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../models/interfaces';
import { ClearUserName, Login } from '../../store/actions/user.action';
import { Subscription } from 'rxjs';
import { ClearCoursesList } from 'src/app/store/actions/courses.action';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public loginName: string;
  public loginPassword: string;

  private subscriptions = new Subscription();

  constructor(private store$: Store<AppState>) { }

  public ngOnInit() {
    // this.authService.deleteUserInfo();
    this.store$.dispatch(ClearUserName());
    this.store$.dispatch(ClearCoursesList());
  }

  public login() {
    // this.authService.login(this.loginName, this.loginPassword);
    this.store$.dispatch(Login({ email: this.loginName, password: this.loginPassword}));
  }
}
