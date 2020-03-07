import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { CourseInfo } from '../../models/interfaces';

@Directive({
  selector: '[appItemBorderColor]'
})
export class ItemBorderColorDirective implements AfterViewInit {
  // @Input() public course: CourseInfo;
  // let elem: ElementRef;

  constructor(private eleRef: ElementRef) {
  }

  public ngAfterViewInit(): void {
    console.log('Directive');
    this.eleRef.nativeElement.style.border = '2px solid green';
  }
}
