import { Component, OnInit } from '@angular/core';
import { ServersRouteingService } from "../servers-routing.service";

@Component({
	selector: 'intro-server-routing',
	templateUrl: './server-routing.component.html',
	styleUrls: ['./server-routing.component.css']
})
export class ServerRoutingComponent implements OnInit {
	server?: { id: number, name: string, status: string };

	constructor(private serversService: ServersRouteingService) {
	}

	ngOnInit() {
		this.server = this.serversService.getServer(1);
	}
}
