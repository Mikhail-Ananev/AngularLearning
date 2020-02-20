import { Component, OnInit } from '@angular/core';
import { CourseInfo } from '../../models/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, CourseInfo {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;

  constructor() { }

  ngOnInit(): void {
  }


}
