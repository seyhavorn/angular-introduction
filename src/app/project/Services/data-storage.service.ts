import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from './recipe.service';
import { environment } from './../../../environments/environment';
import { RecipeModel } from '../Model/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  baseUrlProject = environment.baseUrlProject + 'recipe.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipe = this.recipeService.getRecipes();
    this.http.put(this.baseUrlProject, recipe).subscribe((response) => {
      console.log('response after store new recipe', response);
    });
  }

  fetchRecipes() {
    return this.http.get<RecipeModel[]>(this.baseUrlProject)
    .pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    )
    // .subscribe(recipes => {
    //   console.log('recipes fetching', recipes);

    //   this.recipeService.setRecipes(recipes);
    // });
  }
}
