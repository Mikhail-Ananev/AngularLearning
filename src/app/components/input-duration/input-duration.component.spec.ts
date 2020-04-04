import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDurationComponent } from './input-duration.component';
import { HoursMinutesPipe } from 'src/app/pipes/hours-minutes.pipe';
import { NgForm } from '@angular/forms';

describe('InputDurationComponent', () => {
  let component: InputDurationComponent;
  let fixture: ComponentFixture<InputDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDurationComponent, HoursMinutesPipe, NgForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
