import { Component, OnInit } from '@angular/core';
import { RecipeModel } from "../Model/recipe.model";
import { RecipeService } from "../Services/recipe.service";

@Component({
	selector: 'intro-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.css'],
	providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
	selectedRecipe: RecipeModel | undefined;

	constructor(
			private recipeService: RecipeService
	) {
	}

	ngOnInit() {
		this.recipeService.recipeSelected.subscribe(
				(recipe: RecipeModel) => {
					this.selectedRecipe = recipe;
				}
		);
	}

}
