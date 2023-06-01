import { Component } from '@angular/core';
import { RecipeModel } from "../Model/recipe.model";

@Component({
  selector: 'intro-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: RecipeModel | undefined;

}
