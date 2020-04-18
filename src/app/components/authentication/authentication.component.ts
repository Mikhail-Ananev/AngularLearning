import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public loginName: string;
  public loginPassword: string;

  constructor(private authService: AuthService) { }

  public ngOnInit() {
    this.authService.deleteUserInfo();
  }

  public login() {
    this.authService.login(this.loginName, this.loginPassword);
  }
}
