import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[introDropdown]',
})
export class DropdownDirective {
  @HostListener('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
}
