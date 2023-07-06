import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SAAnalyticsService {
  registerClick() {
    console.log('Clicked!');
  }
}
