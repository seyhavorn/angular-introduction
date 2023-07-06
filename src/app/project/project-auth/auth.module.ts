import { NgModule } from '@angular/core';
import { ProjectAuthComponent } from './project-auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProjectAuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectAuthComponent,
      },
    ]),
    SharedModule,
  ],
})
export class AuthModule {}
