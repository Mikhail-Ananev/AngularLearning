import { Component, DebugElement, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfo } from '../../models/interfaces';
import { ItemComponent } from './item.component';
import MOCKCOURSES from './test-mock-items';
import { setupMaster } from 'cluster';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <app-item
      *ngFor="let course of courses"
      [course]="course"
      (deleteEvent)="deleteCourseById($event)"
      (editEvent)="editCourseById($event)"
    >
    </app-item>
  `
})
class TestHostComponent implements OnInit {
  public courses: Array<CourseInfo>;

  constructor() { }

  public ngOnInit(): void {
    this.courses = MOCKCOURSES.slice();
  }

  public deleteCourseById(id: number) {
    this.courses = this.courses.filter(c => c.id !== id);
  }

  public editCourseById(id: number) {
    console.log('Here should be a method to edit course with ID: ' + id);
  }
}

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

  const setup = () => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();


    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;

    fixture.detectChanges();
  };

  it('should create', () => {
    setup();

    expect(component).toBeTruthy();
  });

  it('contains relevant info', () => {
    setup();

    expect(component.course).toEqual(mockCourse);
  });

  it('should call delete function', (done: DoneFn) => {
    setup();

    component.deleteEvent.subscribe((id: number) => {
      expect(id).toBe(mockCourse.id);
      done();
    });

    const button  = fixture.debugElement.nativeElement.querySelector('input[value=Delete]');
    button.click();
  });

  it('should call edit function', (done: DoneFn) => {
    setup();

    component.editEvent.subscribe((id: number) => {
      expect(id).toBe(mockCourse.id);
      done();
    });

    const button  = fixture.debugElement.nativeElement.querySelector('input[value=Edit]');
    button.click();
  });

  it('should render mocked items', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let debugElement: DebugElement;

    TestBed.configureTestingModule({
      declarations: [ItemComponent, TestHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
    expect(debugElement.queryAll(By.css('.item')).length).toBeTruthy();
  });
  
  it('should check that delete function works', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let debugElement: DebugElement;

    TestBed.configureTestingModule({
      declarations: [ItemComponent, TestHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
    expect(debugElement.queryAll(By.css('.item')).length).toEqual(MOCKCOURSES.length);

    component.deleteCourseById(component.courses[0].id);

    fixture.detectChanges();
    expect(debugElement.queryAll(By.css('.item')).length).toEqual(MOCKCOURSES.length - 1);
  });
});
