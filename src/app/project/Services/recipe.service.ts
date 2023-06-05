import { RecipeModel } from "../Model/recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
	recipeSelected: EventEmitter<RecipeModel> = new EventEmitter<RecipeModel>();

	private recipes: RecipeModel[] = [
		new RecipeModel('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
		new RecipeModel('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
	];

	getRecipes(): RecipeModel[] {
		return this.recipes.slice();
	}
}
