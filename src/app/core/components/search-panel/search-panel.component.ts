import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  searchString: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  startSearch(str: string) {
    console.log("You try to search: " + str);
  }
}
