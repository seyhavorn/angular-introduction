import { NgModule } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ServerModuleComponent } from './server-module/server-module.component';
import { AccountService } from './services/account.service';
import { LogginService } from '../project/Services/loggin.service';
import { UserComponent } from './User/user/user.component';
import { UserActiveComponent } from './User/user-active/user-active.component';
import { CounterService } from './User/counter.service';
import { UserService } from './User/user.service';
import { LoginService } from './services/loginService';
import { UserInactiveComponent } from './User/user-inactive/user-inactive.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ServerRoutingComponent } from '../Routing/servers-routing/server-routing/server-routing.component';

const routes: Route[] = [

];

@NgModule({
  declarations: [
    AccountComponent,
    NewAccountComponent,
    ServerModuleComponent,
    UserComponent,
    UserActiveComponent,
    UserInactiveComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [
    AccountService,
    LogginService,
    CounterService,
    LoginService,
    UserService,
  ],
  exports: [
    AccountComponent,
    NewAccountComponent,
    ServerModuleComponent,
    UserComponent,
    UserActiveComponent,
    UserInactiveComponent,
  ],
})
export class DependencyModule {}
