import { Component, OnInit } from '@angular/core';
import { IngredientModel } from "../shared/ingredient.model";

@Component({
  selector: 'intro-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 1),
    new IngredientModel('Banana', 10)
  ];

  constructor() {
  }

  ngOnInit() {

  }
}
