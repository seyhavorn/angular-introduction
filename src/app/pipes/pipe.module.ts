import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPipesComponent } from './app-pipes/app-pipes.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/pipes/shorten.pipe';
import { FilterPipe } from './pipes/pipes/filter.pipe';

@NgModule({
  declarations: [AppPipesComponent, ShortenPipes, FilterPipe],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [AppPipesComponent],
})
export class PipeModule {}
