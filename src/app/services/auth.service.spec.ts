import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { RouterStub } from '../test-helper/stub-router';
import { HoursMinutesPipe } from '../pipes/hours-minutes.pipe';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursMinutesPipe ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
