import { ObserHomeComponent } from '../Observables/obser-home/obser-home.component';
import { ObserUserComponent } from '../Observables/obser-user/obser-user.component';
import { Route } from '@angular/router';

export const ObserRoute: Route[] = [
  { path: '', component: ObserHomeComponent },
  { path: 'user/:id', component: ObserUserComponent },
];
