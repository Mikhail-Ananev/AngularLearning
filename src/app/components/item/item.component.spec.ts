import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let course =   {
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
    component.course = course;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains relevant info', () => {
    expect(component.course).toEqual(course);
  });

  it('should call delete function', () => {
    spyOn(component, 'deleteCourse');
    let button  = fixture.debugElement.nativeElement.querySelector('input[value=Delete]');
    button.click();
    
    expect(component.deleteCourse).toHaveBeenCalled();
    expect(component.deleteCourse).toHaveBeenCalledWith(course.id);
  });

  it('should call edit function', () => {
    spyOn(component, 'editCourse');
    let button  = fixture.debugElement.nativeElement.querySelector('input[value=Edit]');
    button.click();
    
    expect(component.editCourse).toHaveBeenCalled();
    expect(component.editCourse).toHaveBeenCalledWith(course.id);
  });
});
