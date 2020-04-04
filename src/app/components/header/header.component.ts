import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;
  public faSignOutAlt = faSignOutAlt;
  public faUser = faUser;

  private subscriptions = new Subscription();

  constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.subscriptions.add(this.authService.isAuth$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth
    }));
  }

  public logOff() {
    this.authService.logout();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
