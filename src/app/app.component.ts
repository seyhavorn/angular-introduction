import { Component } from '@angular/core';
import { LoginService } from './serviceDependency/services/loginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'introduction';
  protected outputText: string | undefined;

  constructor(
    private loginService: LoginService,
  ) {}

  onGet(): void {
    this.title = 'Hello';
    this.loginService.logStatusChange('pending');
  }
}
