import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appItemBorderColor]'
})
export class ItemBorderColorDirective implements AfterViewInit {
  private difDate: Date;
  private freshCourse = 14;

  @Input() public appItemBorderColor: Date;

  constructor(private eleRef: ElementRef) {
  }

  public ngAfterViewInit(): void {
    if (this.isCourseFresh(this.appItemBorderColor)) {
      this.eleRef.nativeElement.style.border = '2px solid green';
    }
  }

  private isCourseFresh = (creationDate: Date) => {
    const msDiff = Math.abs(creationDate.getTime() - new Date().getTime());
    const diffDate = Math.ceil(msDiff / (1000 * 3600 * 24));

    if (diffDate >= this.freshCourse) {
      return false;
    }

    return true;
  }
}
