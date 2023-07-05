import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[introPLceHolder]',
})
export class PlaceHolderDirective {
  constructor(public ViewContainerRef: ViewContainerRef) {}
}
