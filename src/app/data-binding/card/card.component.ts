import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardType } from "../Card.interface";

@Component({
  selector: 'intro-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: CardType | undefined;
  @Output() title: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  sendTitle(title?: string) {
    this.title.emit(title);
  }
}
