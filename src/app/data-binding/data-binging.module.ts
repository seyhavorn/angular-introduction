import { NgModule } from '@angular/core';
import { DatabindingModulesComponent } from './databinding-modules.component';
import { AdHostDirective } from './adHost.directive';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content/content.component';
import { ChildComponent } from './child/child.component';
import { DataComponent } from './Databinding/data/data.component';
import { FormComponent } from './Databinding/form/form.component';

@NgModule({
  declarations: [
    DatabindingModulesComponent,
    CardComponent,
    ContentComponent,
    AdHostDirective,
    ChildComponent,
    DataComponent,
    FormComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    DatabindingModulesComponent,
    CardComponent,
    ContentComponent,
    AdHostDirective,
    ChildComponent,
    DataComponent,
    FormComponent
  ],
})
export class DataBindingModule {}
