import { NgModule } from '@angular/core';
import { ShoppingListService } from './project/Services/shopping-list.service';
import { RecipeService } from './project/Services/recipe.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './project/Services/auth-interceptor.service';
import { LogginService } from './project/Services/loggin.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
})
export class CoreModules {}
