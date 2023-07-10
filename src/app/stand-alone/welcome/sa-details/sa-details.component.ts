import { Component } from '@angular/core';
import { SAAnalyticsService } from '../../shared/sa-analytics.service';
import { SAHighlightDirective } from '../../shared/sa-highlight.directive';

@Component({
  standalone: true,
  imports: [SAHighlightDirective],
  selector: 'intro-sa-details',
  templateUrl: './sa-details.component.html',
  styleUrls: ['./sa-details.component.css']
})
export class SaDetailsComponent {

  constructor(private analyticsService: SAAnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
