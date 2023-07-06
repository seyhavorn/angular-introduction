import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSaComponent } from './app-sa/app-sa.component';
import { SaSharedModule } from './shared/sa-shared.module';
import { SaDetailsComponent } from './welcome/sa-details/sa-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppSaComponent, WelcomeComponent, SaDetailsComponent],
  imports: [CommonModule, SaSharedModule],
  exports: [AppSaComponent, SaDetailsComponent],
})
export class StandAloneModule {}
