import { NgModule } from '@angular/core';
import { ObserComponent } from './obser/obser.component';
import { ObserHomeComponent } from './obser-home/obser-home.component';
import { ObserUserComponent } from './obser-user/obser-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

const obserRoute: Route[] = [
  { path: '', component: ObserHomeComponent },
  { path: 'user/:id', component: ObserUserComponent },
];

@NgModule({
  declarations: [ObserComponent, ObserHomeComponent, ObserUserComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(obserRoute)],
  providers: [],
  exports: [ObserComponent, ObserHomeComponent, ObserUserComponent],
})
export class ObservableModule {}
