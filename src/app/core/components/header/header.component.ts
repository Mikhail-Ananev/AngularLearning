import { Component, OnInit } from '@angular/core';
import { User } from '../../models/interfaces';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public faSignOutAlt = faSignOutAlt;
  public faUser = faUser;

  constructor() { }

  public ngOnInit(): void {
  }
}
