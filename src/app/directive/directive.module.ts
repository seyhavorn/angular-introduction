import { NgModule } from '@angular/core';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHightlighDirective } from './better-highlight/better-hightligh.directive';
import { CommonModule } from '@angular/common';
import { DirectiveModulesComponent } from './directive-modules.component';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    BasicHighlightDirective,
    BetterHightlighDirective,
    DirectiveModulesComponent,
    UnlessDirective,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    BasicHighlightDirective,
    BetterHightlighDirective,
    DirectiveModulesComponent,
    UnlessDirective,
  ],
})
export class DirectiveModule {}
