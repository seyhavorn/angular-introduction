import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppPipesComponent } from './app-pipes/app-pipes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [AppPipesComponent, FilterPipe, ShortenPipe],
  imports: [CommonModule, FormsModule],
  exports: [AppPipesComponent, FilterPipe, ShortenPipe],
})
export class PipeModule {}
