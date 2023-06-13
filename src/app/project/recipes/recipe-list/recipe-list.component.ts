import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../Model/recipe.model';
import { RecipeService } from '../../Services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'intro-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes?: RecipeModel[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
