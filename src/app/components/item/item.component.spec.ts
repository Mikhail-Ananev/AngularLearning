import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfo } from '../../models/interfaces';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  const mockCourse: CourseInfo = {
    id: 1,
    title: 'Video course',
    creationDate: new Date(1988, 2, 25),
    duration: 75,
    description: 'Course description',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains relevant info', () => {
    expect(component.course).toEqual(mockCourse);
  });

  it('should call delete function', (done: DoneFn) => {
    component.deleteEvent.subscribe((id: number) => {
      expect(id).toBe(mockCourse.id);
      done();
    });

    const button  = fixture.debugElement.nativeElement.querySelector('input[value=Delete]');
    button.click();
  });

  it('should call edit function', (done: DoneFn) => {
    component.editEvent.subscribe((id: number) => {
      expect(id).toBe(mockCourse.id);
      done();
    });

    const button  = fixture.debugElement.nativeElement.querySelector('input[value=Edit]');
    button.click();
  });
});
