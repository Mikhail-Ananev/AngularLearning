import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  public loginName: string;
  public loginPassword: string;

  constructor(private authService: AuthService) { }

  public login() {
    this.authService.login(this.loginName, this.loginPassword);
  }
}
