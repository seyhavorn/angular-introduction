import { Component, OnInit } from '@angular/core';
import { CardType } from "../Card.interface";

@Component({
  selector: 'intro-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cards: CardType[] = [];
  titleFromChild?: string;

  ngOnInit(): void {
    this.cards = [
      {
        image: "./assets/card1.jpg",
        title: "Card 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque aut corporis doloribus dolorum ea eos et exercitationem, "
      },
      {
        image: "./assets/card1.jpg",
        title: "Card 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque aut corporis doloribus dolorum ea eos et exercitationem, "
      },
      {
        image: "./assets/card1.jpg",
        title: "Card 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque aut corporis doloribus dolorum ea eos et exercitationem, "
      },
      {
        image: "./assets/card1.jpg",
        title: "Card 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque aut corporis doloribus dolorum ea eos et exercitationem, "
      }
    ];
  }

  getTitle(data: string): void {
    this.titleFromChild = data;
  }
}
