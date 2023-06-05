import { IngredientModel } from "../shared/ingredient.model";

export class ShoppingListService {
	private ingredients: IngredientModel[] = [
		new IngredientModel('Apples', 5),
		new IngredientModel('Tomatoes', 10),
	];

	getIngredients(): IngredientModel[] {
		return this.ingredients.slice();
	}

	addIngredient(ingredients: IngredientModel) {
		this.ingredients.push(ingredients);
	}
}
