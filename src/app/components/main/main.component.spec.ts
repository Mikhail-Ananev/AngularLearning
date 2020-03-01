import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockHeaderComponent,
        MockBreadcrumbsComponent,
        MocRouterOutletComponent,
        MockFooterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-header',
  template: ''
})
class MockHeaderComponent {
}

@Component({
  selector: 'app-breadcrumbs',
  template: ''
})
class MockBreadcrumbsComponent {
}

@Component({
  selector: 'router-outlet',
  template: ''
})
class MocRouterOutletComponent {
}

@Component({
  selector: 'app-footer',
  template: ''
})
class MockFooterComponent {
}
