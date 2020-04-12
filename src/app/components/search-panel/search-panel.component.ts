import { Component } from '@angular/core';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  public searchString: string;

  constructor(private coursesService: CoursesService) { }

  public startSearch() {
    this.coursesService.setFilter(this.searchString);
  }
}
