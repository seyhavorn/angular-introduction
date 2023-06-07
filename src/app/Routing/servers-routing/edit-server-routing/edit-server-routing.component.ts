import { Component, OnInit } from '@angular/core';
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

	constructor(private serversService: ServersRouteingService) {
	}

	ngOnInit() {
		this.server = this.serversService.getServer(1);
		this.serverName = this.server?.name;
		this.serverStatus = this.server?.status;
	}

	onUpdateServer() {
		// @ts-ignore
		this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
	}
}
