import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public searchString: string;

  constructor() { }

  public ngOnInit(): void {
    this.searchString = '';
  }

  public search(str: string) {
    this.searchString = str;
  }
}
