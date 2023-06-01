import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './Databinding/data/data.component';
import { FormComponent } from './Databinding/form/form.component';
import { DatabindingModulesComponent } from './databinding-modules.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DataBindingModule {
  title = 'databinding';
}
