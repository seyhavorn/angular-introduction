import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { CardComponent } from './data-binding/card/card.component';
import { ContentComponent } from './data-binding/content/content.component';
import { AdHostDirective } from './data-binding/adHost.directive';
import { UserActiveComponent } from './serviceDependency/User/user-active/user-active.component';
import { UserInactiveComponent } from './serviceDependency/User/user-inactive/user-inactive.component';
import { UserComponent } from './serviceDependency/User/user/user.component';
import { UserService } from './serviceDependency/User/user.service';
import { CounterService } from './serviceDependency/User/counter.service';
import { ShoppingListService } from './project/Services/shopping-list.service';
import { UsersRoutingComponent } from './Routing/users-routing/users-routing.component';
import { UserRoutingComponent } from './Routing/users-routing/user-routing/user-routing.component';
import { ServersRoutingComponent } from './Routing/servers-routing/servers-routing.component';
import { HomeRoutingComponent } from './Routing/home-routing/home-routing.component';
import { MenuRoutingComponent } from './Routing/menu-routing/menu-routing.component';
import { ServerRoutingComponent } from './Routing/servers-routing/server-routing/server-routing.component';
import { EditServerRoutingComponent } from './Routing/servers-routing/edit-server-routing/edit-server-routing.component';
import { ServersRouteingService } from './Routing/servers-routing/servers-routing.service';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { AuthService } from './Routing/Auth.service';
import { AuthGuard } from './Routing/auth-guard.service';
import { CanDeactivateGuard } from './Routing/can-deactive-guard.service';
import { ErrorPageComponent } from './Routing/error-page/error-page.component';
import { ServerRoutingResolver } from './Routing/servers-routing/server-routing/server-routing-resolver.service';
import { RecipeStartComponent } from './project/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './project/recipes/recipe-edit/recipe-edit.component';
import { ObserComponent } from './Observables/obser/obser.component';
import { ObserHomeComponent } from './Observables/obser-home/obser-home.component';
import { ObserUserComponent } from './Observables/obser-user/obser-user.component';
import { FormComponent } from './form/form/form.component';
import { AppFormComponent } from './form/app-form/app-form.component';
import { FormTdExComponent } from './form/form-td-ex/form-td-ex.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { ReactiveFormExComponent } from './form/reactive-form-ex/reactive-form-ex.component';
import { ProjectModulesComponent } from './project/project-modules/project-modules.component';
import { AppPipesComponent } from './pipes/app-pipes/app-pipes.component';
import { ShortenPipe } from './pipes/pipes/shorten.pipe';
import { FilterPipe } from './pipes/pipes/filter.pipe';
import { AppHttpComponent } from './http/app-http/app-http.component';
import { HttpRequestComponent } from './http/http-request/http-request.component';
import { RecipeService } from './project/Services/recipe.service';
import { ProjectAuthComponent } from './project/project-auth/project-auth.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { LoadingSpinnerComponent } from './project/shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './project/Services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShortenPipe,
    FilterPipe,
    ProjectModulesComponent,
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
    ContentComponent,
    AdHostDirective,
    UserActiveComponent,
    UserInactiveComponent,
    UserComponent,
    UsersRoutingComponent,
    UserRoutingComponent,
    ServersRoutingComponent,
    HomeRoutingComponent,
    MenuRoutingComponent,
    ServerRoutingComponent,
    EditServerRoutingComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ObserComponent,
    ObserHomeComponent,
    ObserUserComponent,
    FormComponent,
    AppFormComponent,
    FormTdExComponent,
    ReactiveFormComponent,
    ReactiveFormExComponent,
    AppPipesComponent,
    AppHttpComponent,
    HttpRequestComponent,
    ProjectAuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfigProject),
  ],
  providers: [
    LoginService,
    UserService,
    CounterService,
    ShoppingListService,
    ServersRouteingService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerRoutingResolver,
    RecipeService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoginInterceptorService,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true,
    // },
    // DataStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
