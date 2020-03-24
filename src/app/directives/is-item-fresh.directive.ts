import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[isItemFresh]'
})
export class IsItemFreshDirective implements AfterViewInit {
  private freshCourse = 14;

  @Input() public isItemFresh: Date;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
  }

  public ngAfterViewInit(): void {
    this.isCourseFresh(this.isItemFresh);
  }

  private isCourseFresh = (creationDate: Date) => {
    const now = new Date();
    let offsetDate = new Date();
    offsetDate = new Date(offsetDate.setDate(offsetDate.getDate() - this.freshCourse));

    if (creationDate.getTime() > now.getTime()) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border', '2px solid blue');
    } else if (creationDate.getTime() > offsetDate.getTime()) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border', '2px solid green');
    }
  }
}
