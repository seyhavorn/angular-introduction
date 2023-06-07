import { Component, OnInit } from '@angular/core';
import { ServersRouteingService } from "./servers-routing.service";

@Component({
	selector: 'intro-servers-routing',
	templateUrl: './servers-routing.component.html',
	styleUrls: ['./servers-routing.component.css']
})
export class ServersRoutingComponent implements OnInit {

	public servers: { id: number, name: string, status: string }[] = [];

	constructor(private serversService: ServersRouteingService) {
	}

	ngOnInit() {
		this.servers = this.serversService.getServers();
	}
}
