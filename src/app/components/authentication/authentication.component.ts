import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../models/interfaces';
import { ClearUserName, Login } from '../../store/actions/user.action';
import { ClearCoursesList } from '../../store/actions/courses.action';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public loginName: string;
  public loginPassword: string;

  constructor(private store$: Store<AppState>) { }

  public ngOnInit() {
    this.store$.dispatch(ClearUserName());
    this.store$.dispatch(ClearCoursesList());
  }

  public login() {
    this.store$.dispatch(Login({ email: this.loginName, password: this.loginPassword}));
  }
}
