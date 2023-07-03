import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeModel } from '../../Model/recipe.model';
import { RecipeService } from '../../Services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataStorageService } from '../../Services/data-storage.service';

@Component({
  selector: 'intro-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes?: RecipeModel[];
  sub!: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.sub = this.recipeService.recipesChanged.subscribe((recipes: RecipeModel[]) => {
      this.recipes = recipes;
    });

    // this.dataStorageService.fetchRecipes().subscribe((recipes: RecipeModel[]) => {
    //   this.recipes = recipes;
    // })

    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
