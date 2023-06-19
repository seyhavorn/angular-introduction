import { RecipeModel } from '../Model/recipe.model';
import { Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();

  // private recipes: RecipeModel[] = [
  //   new RecipeModel(
  //     'A Test Recipe',
  //     'This is simply a test',
  //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  //     [new IngredientModel('Meat', 1), new IngredientModel('French Fries', 12)]
  //   ),
  //   new RecipeModel(
  //     'Another Test Recipe',
  //     'This is simply a test',
  //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  //     [new IngredientModel('Buns', 2), new IngredientModel('Meats', 12)]
  //   ),
  // ];

  private recipes: RecipeModel[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): RecipeModel[] {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredient);
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
