import { Route } from '@angular/router';
import { RecipesComponent } from '../project/recipes/recipes.component';
import { ShoppingListComponent } from '../project/shopping-list/shopping-list.component';

export const projectRoute: Route[] = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
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
