import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  public searchString: string;

  constructor() { }

  public ngOnInit(): void {
    this.searchString = '';
  }

  public startSearch(str: string) {
    console.log('You try to search: ' + str);
  }
}
