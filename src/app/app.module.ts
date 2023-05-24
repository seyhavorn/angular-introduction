import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ServerComponent } from './server/server.component';
import { DirectiveComponent } from './Example/directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MenuComponent,
    DataBindingComponent,
    ServerComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
