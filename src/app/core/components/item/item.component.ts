import { Component, OnInit } from '@angular/core';
import { CourseInfo } from '../../models/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, CourseInfo {

  constructor() { }

  ngOnInit(): void {
  }

  id: Number;
  title: String;
  creationDate: Date;
  duration: Number;
  description: String;
}
