import { Component, EventEmitter, Input, Output } from '@angular/core';

export class CardModel {
  image?: string;
  title?: string;
  description?: string;
}

@Component({
  selector: 'intro-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() card: CardModel | undefined;
  @Output() outputText = new EventEmitter<string>();

  OnOutputText(title?: string) {
    this.outputText.emit(title);
  }
}
