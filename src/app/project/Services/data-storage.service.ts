import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { RecipeService } from './recipe.service';
import { environment } from './../../../environments/environment';
import { RecipeModel } from '../Model/recipe.model';
import { ProjectAuthService } from './project-auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  env = environment.firebaseConfigProject;
  baseUrlProject =
    environment.firebaseConfigProject.databaseURL + 'recipe.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: ProjectAuthService
  ) {}

  storeRecipes() {
    const recipe = this.recipeService.getRecipes();

    this.http.put(this.baseUrlProject, recipe).subscribe((response) => {
      console.log('response after store new recipe', response);
    });
  }

  fetchRecipes(): void {
    this.authService.user
    .pipe(
      take(1),
      exhaustMap((user) => {
        console.log('use', user);

        return this.http.get<RecipeModel[]>(this.baseUrlProject,
          {
            params: new HttpParams().set('auth', user.token)
          }
          );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );

    // .pipe(
    //   map((recipes) => {
    //     return recipes.map((recipe) => {
    //       return {
    //         ...recipe,
    //         ingredients: recipe.ingredients ? recipe.ingredients : [],
    //       };
    //     });
    //   }),
    //   tap((recipes) => {
    //     this.recipeService.setRecipes(recipes);
    //   })
    // );

    // .subscribe(recipes => {
    //   console.log('recipes fetching', recipes);

    //   this.recipeService.setRecipes(recipes);
    // });
  }
}
