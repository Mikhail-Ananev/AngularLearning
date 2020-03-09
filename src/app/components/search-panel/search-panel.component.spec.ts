import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';

import { SearchPanelComponent } from './search-panel.component';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPanelComponent, NgForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search write string value', () => {
    const str = 'House';
    component.searchString = str;

    spyOn(component, 'startSearch');
    const button  = fixture.debugElement.nativeElement.querySelector('input[type=button]');
    button.click();

    expect(component.startSearch).toHaveBeenCalledWith(str);
  });

  it('should call search function', () => {
    spyOn(component, 'startSearch');
    component.startSearch('');

    expect(component.startSearch).toHaveBeenCalled();
  });
});
