import { Component, OnInit } from '@angular/core';
import { User } from '../../models/interfaces';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, User {
  id: number;
  firstName: string;
  lastName: string;
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }
}
