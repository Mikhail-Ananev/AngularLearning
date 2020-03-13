import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[isItemFresh]'
})
export class IsItemFreshDirective implements AfterViewInit {
  private freshCourse = 14;

  @Input() public isItemFresh: Date;

  constructor(private eleRef: ElementRef) {
  }

  public ngAfterViewInit(): void {
    this.isCourseFresh(this.isItemFresh);
  }

  private isCourseFresh = (creationDate: Date) => {
    const now = new Date();
    let offsetDate = new Date();
    offsetDate = new Date(offsetDate.setDate(offsetDate.getDate() - this.freshCourse));

    if (creationDate.getTime() > now.getTime()) {
      this.eleRef.nativeElement.style.border = '2px solid blue';
    } else if (creationDate.getTime() > offsetDate.getTime()) {
      this.eleRef.nativeElement.style.border = '2px solid green';
    }
  }
}
