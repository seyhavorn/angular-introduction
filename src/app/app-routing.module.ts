import { NgModule } from '@angular/core';
import { RouterModule, Routes, withHashLocation } from '@angular/router';
import { UsersRoutingComponent } from './Routing/users-routing/users-routing.component';
import { ServersRoutingComponent } from './Routing/servers-routing/servers-routing.component';
import { HomeRoutingComponent } from './Routing/home-routing/home-routing.component';
import { EditServerRoutingComponent } from './Routing/servers-routing/edit-server-routing/edit-server-routing.component';
import { ServerRoutingComponent } from './Routing/servers-routing/server-routing/server-routing.component';
import { UserRoutingComponent } from './Routing/users-routing/user-routing/user-routing.component';
import { AuthGuard } from './Routing/auth-guard.service';
import { CanDeactivateGuard } from './Routing/can-deactive-guard.service';
import { ErrorPageComponent } from './Routing/error-page/error-page.component';
import { ServerRoutingResolver } from './Routing/servers-routing/server-routing/server-routing-resolver.service';
import { projectRoute } from './route/project-routing.modules';

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
        resolve: { server: ServerRoutingResolver },
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
  imports: [RouterModule.forRoot(projectRoute)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
