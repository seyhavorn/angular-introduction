import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './project/menu/menu.component';
import { HttpModule } from './http/http.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectModulesComponent } from './project/project-modules/project-modules.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ShoppingListModule } from './project/shopping-list/shopping-list.module';
import { SharedModule } from './project/shared/shared.module';
import { CoreModules } from './core.module';
import { AuthModule } from './project/project-auth/auth.module';
import { StandAloneModule } from './stand-alone/stand-alone.module';
import { DataBindingModule } from './data-binding/data-binging.module';
import { PipeModule } from './pipes/pipe.module';
import { FormModule } from './form/form.module';
import { ObservableModule } from './Observables/observable.module';
import { DirectiveModule } from './directive/directive.module';
// import { RoutingModule } from './Routing/routing.module';
import { DependencyModule } from './serviceDependency/depependency.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProjectModulesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfigProject),
    ShoppingListModule,
    PipeModule,
    FormModule,
    DirectiveModule,
    HttpModule,
    // RoutingModule,
    DependencyModule,
    DataBindingModule,
    // AuthModule,
    ObservableModule,
    SharedModule,
    CoreModules,
    StandAloneModule,
  ],
  providers: [
    // DataStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
