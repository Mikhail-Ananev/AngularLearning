import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IsItemFreshDirective } from './is-item-fresh.directive';

@Component({
  template: `
    <div>Without directive</div>
    <div [isItemFresh]="freshCourse"> </div>
    <div [isItemFresh]="futureCourse"> </div>
    <div [isItemFresh]="oldCourse"> </div>
  `
})
class TestComponent {
  public freshCourse = new Date();
  public futureCourse = new Date(2050, 0, 1);
  public oldCourse = new Date(2000, 0, 1);
}

describe('IsItemFreshDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let withDirective: DebugElement[]; // три элемента с директивой
  let withoutDirective: DebugElement; // <div> без директивы

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [IsItemFreshDirective, TestComponent]
    }).createComponent(TestComponent);

    withDirective = fixture.debugElement.queryAll(By.directive(IsItemFreshDirective));

    withoutDirective = fixture.debugElement.query(By.css('div:not([isItemFresh])'));

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have three elements with "isItemFresh" directive', () => {
    expect(withDirective.length).toBe(3);
  });

  it('1st element (fresh) should have border color "green"', () => {
    const bgColor = withDirective[0].nativeElement.style.borderColor;
    expect(bgColor).toBe('green');
  });

  it('2nd element (future) should have border color "blue"', () => {
    const bgColor = withDirective[1].nativeElement.style.borderColor;
    expect(bgColor).toBe('blue');
  });

  it('3d element (old) should have no changes for border color', () => {
    const bgColor = withDirective[2].nativeElement.style.borderColor;
    expect(bgColor).toBe('');
  });

  it('can inject `IsItemFreshDirective` in 1st element with directive', () => {
    const dir = withDirective[0].injector.get(IsItemFreshDirective);
    expect(dir).toBeTruthy();
  });

  it('cannot inject `IsItemFreshDirective` in element without directive', () => {
    const dir = withoutDirective.injector.get(IsItemFreshDirective, null);
    expect(dir).toBe(null);
  });

  it('should have `IsItemFreshDirective` in providerTokens for element with directive', () => {
    expect(withDirective[0].providerTokens).toContain(IsItemFreshDirective);
  });

  it('should not have `IsItemFreshDirective` in providerTokens for element without directive', () => {
    expect(withoutDirective.providerTokens).not.toContain(IsItemFreshDirective);
  });
});
