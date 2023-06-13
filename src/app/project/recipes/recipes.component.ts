import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../Services/recipe.service';

@Component({
  selector: 'intro-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
