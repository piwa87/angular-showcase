import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[atPrimaryColor]',
  standalone: true
})
export class PrimaryColorDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.el.nativeElement, 'at-primary-color');
  }
}
