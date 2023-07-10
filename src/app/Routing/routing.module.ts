import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeRoutingComponent } from './home-routing/home-routing.component';
import { MenuRoutingComponent } from './menu-routing/menu-routing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerRoutingComponent } from './servers-routing/edit-server-routing/edit-server-routing.component';
import { ServerRoutingComponent } from './servers-routing/server-routing/server-routing.component';
import { ServerRoutingResolver } from './servers-routing/server-routing/server-routing-resolver.service';
import { UserRoutingComponent } from './users-routing/user-routing/user-routing.component';
import { UsersRoutingComponent } from './users-routing/users-routing.component';
import { AuthGuard } from '../project/Services/project-auth.guard';
import { AuthService } from './Auth.service';
import { CanDeactivateGuard } from './can-deactive-guard.service';
import { ServersRouteingService } from './servers-routing/servers-routing.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './route';

@NgModule({
  declarations: [
    ErrorPageComponent,
    HomeRoutingComponent,
    MenuRoutingComponent,
    PageNotFoundComponent,
    EditServerRoutingComponent,
    ServerRoutingComponent,
    UserRoutingComponent,
    UsersRoutingComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [
    ServerRoutingResolver,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    ServersRouteingService,
  ],
  exports: [
    ErrorPageComponent,
    HomeRoutingComponent,
    MenuRoutingComponent,
    PageNotFoundComponent,
    EditServerRoutingComponent,
    ServerRoutingComponent,
    ServerRoutingComponent,
    UserRoutingComponent,
    UsersRoutingComponent,
  ],
})
export class RoutingModule {}
