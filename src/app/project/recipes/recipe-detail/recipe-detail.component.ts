import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from "../../Model/recipe.model";
import { RecipeService } from '../../Services/recipe.service';

@Component({
	selector: 'intro-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

	@Input() recipe?: RecipeModel;

	constructor(
		private recipeService: RecipeService
	) {
	}

	ngOnInit() {
		console.log('Here');
	}

	onAddToShoppingList() {
		// @ts-ignore
		this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
	}
}

