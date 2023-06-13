import { RecipeModel } from '../Model/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected: EventEmitter<RecipeModel> = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new IngredientModel('Meat', 1), new IngredientModel('French Fries', 12)]
    ),
    new RecipeModel(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new IngredientModel('Buns', 2), new IngredientModel('Meats', 12)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): RecipeModel[] {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredient);
  }
}
