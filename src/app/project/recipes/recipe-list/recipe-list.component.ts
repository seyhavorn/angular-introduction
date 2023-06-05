import { Component, OnInit } from '@angular/core';
import { RecipeModel } from "../../Model/recipe.model";
import { RecipeService } from "../../Services/recipe.service";

@Component({
	selector: 'intro-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes?: RecipeModel[];

	constructor(
			private recipeService: RecipeService
	) {
	}

	ngOnInit() {
		this.recipes = this.recipeService.getRecipes();
	}
}
