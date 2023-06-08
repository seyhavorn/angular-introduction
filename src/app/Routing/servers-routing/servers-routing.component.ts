import { Component, OnInit } from '@angular/core';
import { ServersRouteingService } from "./servers-routing.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: 'intro-servers-routing',
	templateUrl: './servers-routing.component.html',
	styleUrls: ['./servers-routing.component.css']
})
export class ServersRoutingComponent implements OnInit {

	public servers: { id: number, name: string, status: string }[] = [];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private serversService: ServersRouteingService,
	) {
	}

	ngOnInit() {
		this.servers = this.serversService.getServers();
	}

	onReloadPages() {
		this.router.navigate(['/servers'], {relativeTo: this.route});
	}
}
