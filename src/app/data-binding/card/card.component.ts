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
  @Output() cardContent: EventEmitter<CardType> = new EventEmitter<CardType>();

  ngOnInit(): void {
  }

  sendTitle(title?: string) {
    this.title.emit(title);
  }

  sendCardToParent(card?: CardType): void {
    this.cardContent.emit(card);
    console.log('this card', card);
  }
}
