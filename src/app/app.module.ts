import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
