import { Component } from '@angular/core';
import { LoginService } from "./serviceDependency/services/loginService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'introduction';
  loadedFeature: string = 'recipe';
  protected outputText: string | undefined;

  constructor(
    private loginService: LoginService
  ) {
  }

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }

  onGet(): void {
    this.title = 'Hello';
    this.loginService.logStatusChange('pending');

  }

}
