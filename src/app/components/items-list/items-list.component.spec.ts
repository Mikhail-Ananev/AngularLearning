import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ItemsListComponent } from './items-list.component';
import { CourseInfo } from 'src/app/models/interfaces';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { RouterStub } from 'src/app/test-helper/stub-router';

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
      declarations: [ ItemsListComponent, MockItemComponent, OrderByPipe ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
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
