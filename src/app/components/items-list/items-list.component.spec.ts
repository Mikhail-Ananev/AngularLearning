import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListComponent } from './items-list.component';
import { CourseInfo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-item',
  template: ''
})
class MockItemComponent {
  @Input() public course: CourseInfo;
}

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListComponent, MockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
