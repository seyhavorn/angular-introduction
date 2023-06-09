import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersRoutingComponent } from './Routing/users-routing/users-routing.component';
import { ServersRoutingComponent } from './Routing/servers-routing/servers-routing.component';
import { HomeRoutingComponent } from './Routing/home-routing/home-routing.component';
import { EditServerRoutingComponent } from './Routing/servers-routing/edit-server-routing/edit-server-routing.component';
import { ServerRoutingComponent } from './Routing/servers-routing/server-routing/server-routing.component';
import { UserRoutingComponent } from './Routing/users-routing/user-routing/user-routing.component';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { AuthGuard } from './Routing/auth-guard.service';
import { CanDeactivateGuard } from './Routing/can-deactive-guard.service';
import { ErrorPageComponent } from './Routing/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeRoutingComponent,
  },
  {
    path: 'users',
    component: UsersRoutingComponent,
    children: [
      {
        path: ':id/:name',
        component: UserRoutingComponent,
      },
    ],
  },
  {
    path: 'servers',
    component: ServersRoutingComponent,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: ServerRoutingComponent,
      },
      {
        path: ':id/edit',
        component: EditServerRoutingComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  // {
  //   path: 'not-found',
  //   component: PageNotFoundComponent,
  // },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {
      message: 'Page Not Found!',
    },
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
