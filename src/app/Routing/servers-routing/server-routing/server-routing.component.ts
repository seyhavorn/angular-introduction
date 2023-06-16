import { Component, OnInit } from '@angular/core';
import { ServersRouteingService } from "../servers-routing.service";
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
	selector: 'intro-server-routing',
	templateUrl: './server-routing.component.html',
	styleUrls: ['./server-routing.component.css']
})
export class ServerRoutingComponent implements OnInit {
	server: { id: number; name: string; status: string; } | undefined;

	constructor(
		private serversService: ServersRouteingService,
		private route: ActivatedRoute,
		private router: Router
	) {
	}

	ngOnInit() {
		this.route.data.subscribe((data: Data) => {
			this.server = data['server'];
		});
		// const id = this.route.snapshot.params['id'];
		// this.server = this.serversService.getServer(id);
		// this.route.params.subscribe((params: Params) => {
		// 	this.server = this.serversService.getServer(+params['id']);
		// })
	}

	onEdit() {
		this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
	}

}
