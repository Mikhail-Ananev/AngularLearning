import { Component, OnInit } from '@angular/core';
import { User } from '../../models/interfaces';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean;
  public faSignOutAlt = faSignOutAlt;
  public faUser = faUser;
  
  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  public logOff() {
    this.authService.logout();
  }
}
