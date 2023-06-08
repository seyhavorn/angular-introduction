import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersRoutingComponent } from "./Routing/users-routing/users-routing.component";
import { ServersRoutingComponent } from "./Routing/servers-routing/servers-routing.component";
import { HomeRoutingComponent } from "./Routing/home-routing/home-routing.component";
import {
  EditServerRoutingComponent
} from "./Routing/servers-routing/edit-server-routing/edit-server-routing.component";

const routes: Routes = [
  {
    path: '',
    component: HomeRoutingComponent
  },
  {
    path: 'users',
    component: UsersRoutingComponent
  },
  {
    path: 'users/:id/:name',
    component: UsersRoutingComponent
  },
  {
    path: 'servers',
    component: ServersRoutingComponent
  },
  {
    path: 'servers/:id/edit',
    component: EditServerRoutingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
