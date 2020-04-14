import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  public isLoading = false;

  private subscriptions = new Subscription();

  constructor(
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.subscriptions.add(this.loadingService.isLoading$
      .subscribe(value => {
        this.isLoading = value;
        this.cdRef.markForCheck();
      }));
  }
}
