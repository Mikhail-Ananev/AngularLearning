import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading$: Subject<boolean> = new Subject();

  constructor() { }

  public startLoading() {
    this.isLoading$.next(true);
  }

  public stopLoading() {
    setTimeout(() => this.isLoading$.next(false), 500);
  }
}
