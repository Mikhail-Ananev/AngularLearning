import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CoursesService } from './courses.service';
import { RouterStub } from '../test-helper/stub-router';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    });
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
