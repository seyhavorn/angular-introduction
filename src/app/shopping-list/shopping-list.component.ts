import { Component, OnInit } from '@angular/core';
import { IngredientModel } from "../shared/ingredient.model";

@Component({
  selector: 'intro-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }

}
