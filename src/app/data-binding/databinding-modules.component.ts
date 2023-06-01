import { Component, OnInit, Output } from '@angular/core';
import { CardModel } from './child/child.component';

@Component({
  selector: 'intro-databinding-modules',
  templateUrl: './databinding-modules.component.html',
  styleUrls: ['./databinding-modules.component.css'],
})
export class DatabindingModulesComponent implements OnInit {
  cards: CardModel[] = [];
  textFromChild: string = '';

  ngOnInit(): void {
    this.cards = [
      {
        image:
          'https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
        title: 'Card1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt quas dolor culpa asperiores praesentium dolores magnam quis cum numquam! Quas vero voluptatem, consectetur sunt ad cupiditate eaque error impedit.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
        title: 'Card2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt quas dolor culpa asperiores praesentium dolores magnam quis cum numquam! Quas vero voluptatem, consectetur sunt ad cupiditate eaque error impedit.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
        title: 'Card3',
        description:
          'Soluta sunt quas dolor culpa asperiores praesentium dolores magnam quis cum numquam! Quas vero voluptatem, consectetur sunt ad cupiditate eaque error impedit.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
        title: 'Card4',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ];
    this.textFromChild = 'textFromChild';
  }

  OutputText(data: string) {
    this.textFromChild = data;
  }
}
