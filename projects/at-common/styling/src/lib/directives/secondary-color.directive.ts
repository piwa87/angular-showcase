import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[atSecondaryColor]',
  standalone: true
})
export class SecondaryColorDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.el.nativeElement, 'at-secondary-color');
  }
}
