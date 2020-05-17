import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../models/interfaces';
import { selectLoadingCourse } from '../../store/selectors/courses.selectors';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  public loading = this.store.pipe(select(selectLoadingCourse));

  constructor(
    private store: Store<AppState>
  ) { }
}
