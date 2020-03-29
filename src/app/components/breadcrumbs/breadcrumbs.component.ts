import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;

  private subscriptions = new Subscription();

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.subscriptions.add(this.authService.isAuth$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth
    }));
  }
  
  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
