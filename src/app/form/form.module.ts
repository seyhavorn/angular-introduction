import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFormComponent } from './app-form/app-form.component';
import { FormComponent } from './form/form.component';
import { FormTdExComponent } from './form-td-ex/form-td-ex.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormExComponent } from './reactive-form-ex/reactive-form-ex.component';

@NgModule({
  declarations: [
    AppFormComponent,
    FormComponent,
    FormTdExComponent,
    ReactiveFormComponent,
    ReactiveFormExComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    AppFormComponent,
    FormComponent,
    FormTdExComponent,
    ReactiveFormComponent,
    ReactiveFormExComponent,
  ],
})
export class FormModule {}
