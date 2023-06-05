import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from "../../../Model/recipe.model";
import { RecipeService } from "../../../Services/recipe.service";

@Component({
	selector: 'intro-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	@Input() recipe?: RecipeModel;

	constructor(
			private recipeService: RecipeService
	) {
	}

	ngOnInit() {
	}

	onSelected() {
		this.recipeService.recipeSelected.emit(this.recipe);
	}

}
