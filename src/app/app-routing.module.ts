import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersRoutingComponent } from "./Routing/users-routing/users-routing.component";
import { ServersRoutingComponent } from "./Routing/servers-routing/servers-routing.component";
import { HomeRoutingComponent } from "./Routing/home-routing/home-routing.component";
import {
	EditServerRoutingComponent
} from "./Routing/servers-routing/edit-server-routing/edit-server-routing.component";
import { ServerRoutingComponent } from "./Routing/servers-routing/server-routing/server-routing.component";
import { UserRoutingComponent } from "./Routing/users-routing/user-routing/user-routing.component";
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeRoutingComponent
	},
	{
		path: 'users',
		component: UsersRoutingComponent,
		children: [
			{
				path: ':id/:name',
				component: UserRoutingComponent
			},
		]
	},
	{
		path: 'servers',
		component: ServersRoutingComponent,
		children: [
			{
				path: ':id',
				component: ServerRoutingComponent
			},
			{
				path: ':id/edit',
				component: EditServerRoutingComponent
			},
		]
	},
	{
		path: 'not-found',
		component: PageNotFoundComponent
	},
	{
		path: '**',
		redirectTo: 'not-found',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
