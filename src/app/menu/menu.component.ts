import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'intro-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    console.log('feature', feature);
    this.featureSelected.emit(feature);
  }
}
