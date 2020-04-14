import { Component, OnInit } from '@angular/core';

import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  public loading = false;

  constructor(
    private loaderService: LoadingService
  ) { }

  public ngOnInit() {
    this.loaderService.isLoading$
      .subscribe((value: boolean) => {
        this.loading = value;
      });
  }
}
