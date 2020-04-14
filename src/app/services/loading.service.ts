import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading$: Subject<boolean> = new Subject();

  constructor() { }

  public startLoading() {
    console.dir('START');
    this.isLoading$.next(true);
  }

  public stopLoading() {
    console.dir('STOP');

    setTimeout(() => this.isLoading$.next(false), 500);
  }
}
