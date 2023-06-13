import { EventEmitter } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
	ingredientChanged = new Subject<IngredientModel[]>();

	private ingredients: IngredientModel[] = [
		new IngredientModel('Apples', 5),
		new IngredientModel('Tomatoes', 10),
	];

	getIngredients(): IngredientModel[] {
		return this.ingredients.slice();
	}

	addIngredient(ingredients: IngredientModel) {
		this.ingredients.push(ingredients);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients: IngredientModel[]) {
		this.ingredients.push(...ingredients);
		this.ingredientChanged.next(this.ingredients.slice());
		// for (let ingredient of ingredients) {
		// 	this.addIngredients(ingredient);
		// }
	}
}
