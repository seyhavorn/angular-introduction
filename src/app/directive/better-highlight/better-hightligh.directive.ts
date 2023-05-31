import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightligh]',
})
export class BetterHightlighDirective implements OnInit {
  @HostBinding('style.backgroudColor') backgroundColor: string = '';
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @Input() name: String = '';

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'red');
  }
}
