import { Component } from '@angular/core';
import { SaDetailsComponent } from './sa-details/sa-details.component';
// import { SaDetailsComponent } from './sa-details/sa-details.component';

@Component({
  standalone: true,
  imports: [SaDetailsComponent],
  selector: 'intro-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {}
