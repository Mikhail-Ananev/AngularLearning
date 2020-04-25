import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../models/interfaces';
import { selectLoadingState } from '../../store/selectors/loading.selectors';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  public loading = this.store.pipe(select(selectLoadingState));

  constructor(
    private store: Store<AppState>
  ) { }
}
