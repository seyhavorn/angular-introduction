import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './project/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './project/recipes/recipes.component';
import { RecipeListComponent } from './project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './project/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './directive/basic-highlight/basic-highlight.directive';
import { BetterHightlighDirective } from './directive/better-highlight/better-hightligh.directive';
import { DirectiveModulesComponent } from './directive/directive-modules.component';
import { DatabindingModulesComponent } from './data-binding/databinding-modules.component';
import { ChildComponent } from './data-binding/child/child.component';
import { UnlessDirective } from './directive/unless.directive';
import { DropdownDirective } from './project/shared/dropdown.directive';
import { AccountComponent } from './serviceDependency/account/account.component';
import { NewAccountComponent } from './serviceDependency/new-account/new-account.component';
import { ServerModuleComponent } from './serviceDependency/server-module/server-module.component';
import { LoginService } from './serviceDependency/services/loginService';
import { CardComponent } from "./data-binding/card/card.component";
import { ContentComponent } from "./data-binding/content/content.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DirectiveModulesComponent,
    BasicHighlightDirective,
    BetterHightlighDirective,
    DatabindingModulesComponent,
    ChildComponent,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    ServerModuleComponent,
    CardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
