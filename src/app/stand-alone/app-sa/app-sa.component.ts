import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  standalone: true,
  imports: [WelcomeComponent],
  selector: 'intro-app-sa',
  templateUrl: './app-sa.component.html',
  styleUrls: ['./app-sa.component.css'],
})
export class AppSaComponent {}
