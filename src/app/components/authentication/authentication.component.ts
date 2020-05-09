import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../models/interfaces';
import { ClearUserName, Login } from '../../store/actions/user.action';
import { ClearCoursesList } from '../../store/actions/courses.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private store$: Store<AppState>,
    private fb: FormBuilder,
  ) { }

  public ngOnInit() {
    this.store$.dispatch(ClearUserName());
    this.store$.dispatch(ClearCoursesList());

    this.loginForm = this.fb.group({
      loginName: ['', Validators.required],
      loginPassword: ['', Validators.required],
    });
  }

  public login() {
    this.store$.dispatch(Login({
      email: this.loginForm.get('loginName').value,
      password: this.loginForm.get('loginPassword').value
    }));
  }
}
