import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  public searchString: string;

  public searchStringUpdate = new Subject<string>();

  constructor(private coursesService: CoursesService) { }

  public ngOnInit() {
    this.searchStringUpdate.pipe(
      filter(text => text.length > 3 || text === ''),
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(data => this.coursesService.setFilter(data)
    );
  }
}
