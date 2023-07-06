import { NgModule } from '@angular/core';
import { SAHighlightDirective } from './sa-highlight.directive';

@NgModule({
  declarations: [SAHighlightDirective],
  exports: [SAHighlightDirective],
})
export class SaSharedModule {}
