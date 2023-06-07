import { EventEmitter } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.model";

export class ShoppingListService {
	ingredientChanged = new EventEmitter<IngredientModel[]>();

	private ingredients: IngredientModel[] = [
		new IngredientModel('Apples', 5),
		new IngredientModel('Tomatoes', 10),
	];

	getIngredients(): IngredientModel[] {
		return this.ingredients.slice();
	}

	addIngredient(ingredients: IngredientModel) {
		this.ingredients.push(ingredients);
		this.ingredientChanged.emit(this.ingredients.slice());
	}

	addIngredients(ingredients: IngredientModel[]) {
		this.ingredients.push(...ingredients);
		this.ingredientChanged.emit(this.ingredients.slice());
		// for (let ingredient of ingredients) {
		// 	this.addIngredients(ingredient);
		// }
	}
}
