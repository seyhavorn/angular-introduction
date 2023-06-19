import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { environment } from './../../../environments/environment';
import { RecipeModel } from '../Model/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  baseUrlProject = environment.baseUrlProject + '/recipe.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    console.log('baser', this.baseUrlProject);

    const recipe = this.recipeService.getRecipes();
    console.log(recipe);

    this.http.put(this.baseUrlProject, recipe).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<RecipeModel[]>(this.baseUrlProject).subscribe((recipes) => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
