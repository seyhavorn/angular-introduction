import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { ServersRouteingService } from "../servers-routing.service";

@Component({
	selector: 'intro-edit-server-routing',
	templateUrl: './edit-server-routing.component.html',
	styleUrls: ['./edit-server-routing.component.css']
})
export class EditServerRoutingComponent implements OnInit {
	server: { id: number, name: string, status: string } | undefined;
	serverName: string | undefined = '';
	serverStatus: string | undefined = '';
	allowEdit: boolean = false;

	constructor(
		private serversService: ServersRouteingService,
		private route: ActivatedRoute
	) {
	}

	ngOnInit() {
		this.route.queryParams.subscribe((queryParams: Params) => {
			this.allowEdit = queryParams['allowEdit'] === '1';
		});
		this.route.fragment.subscribe();
		this.server = this.serversService.getServer(1);
		this.serverName = this.server?.name;
		this.serverStatus = this.server?.status;
	}

	onUpdateServer() {
		// @ts-ignore
		this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
	}
}
