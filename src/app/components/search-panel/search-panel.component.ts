import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../../models/interfaces';
import { GetCourses, ClearCoursesList } from '../../store/actions/courses.action';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  public searchString: string;

  public searchStringUpdate = new Subject<string>();

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.searchStringUpdate.pipe(
      filter(text => text.length > 3 || text === ''),
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(data => this.changeFilterProcessing(data)
    );
  }

  private changeFilterProcessing(data: string) {
    this.store.dispatch(ClearCoursesList());
    this.store.dispatch(GetCourses({ start: 0, filter: data }));
  }
}
