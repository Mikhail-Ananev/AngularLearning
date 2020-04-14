import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements AfterViewInit {

  constructor(private coursesService: CoursesService) { }

  ngAfterViewInit() {
    const searchString = document.getElementById('searchString');

    fromEvent(searchString, 'keyup').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 3),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(data => this.coursesService.setFilter(data));
  }
}
