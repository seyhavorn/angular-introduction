import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveModulesComponent } from './directive-modules.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHightlighDirective } from './better-highlight/better-hightligh.directive';

@NgModule({
  declarations: [
    // DirectiveModulesComponent,
    // BasicHighlightDirective,
    // BetterHightlighDirective,
  ],
  imports: [CommonModule],
})
export class DirectiveModule {
  title = 'directive';
}
