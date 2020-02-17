import { Component, OnInit } from '@angular/core';
import { User } from '../../models/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, User {

  constructor() { }

  ngOnInit(): void {
  }

  id: Number;
  firstName: String;
  lastName: String;
}
