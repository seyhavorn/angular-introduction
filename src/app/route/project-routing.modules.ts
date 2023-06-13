import { Route } from '@angular/router';
import { RecipesComponent } from '../project/recipes/recipes.component';
import { ShoppingListComponent } from '../project/shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../project/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../project/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../project/recipes/recipe-edit/recipe-edit.component';

export const projectRoute: Route[] = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent,
      },
      {
        path: 'new',
        component: RecipeEditComponent,
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path: 'recipes-d',
    component: RecipesComponent,
  },
];
