import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CardType} from "../Card.interface";
import {AdHostDirective} from "../adHost.directive";

@Component({
  selector: 'intro-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: CardType | undefined;
  @Output() title: EventEmitter<string> = new EventEmitter<string>();
  @Output() cardContent: EventEmitter<CardType> = new EventEmitter<CardType>();
  @ViewChild(AdHostDirective, { static: true}) adHost!: AdHostDirective;

  ngOnInit(): void {

  }

  sendTitle(title?: string): void {
    this.title.emit(title);
  }

  sendCardToParent(card?: CardType): void {
    localStorage.removeItem('cardItem');
    this.cardContent.emit(card);
    if (!localStorage.getItem('cardItem')) {
      localStorage.setItem('cardItem', JSON.stringify(card));
    }
  }
}
