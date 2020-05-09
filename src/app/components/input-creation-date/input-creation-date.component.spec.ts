import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCreationDateComponent } from './input-creation-date.component';

describe('InputCreationDateComponent', () => {
  let component: InputCreationDateComponent;
  let fixture: ComponentFixture<InputCreationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCreationDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCreationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
