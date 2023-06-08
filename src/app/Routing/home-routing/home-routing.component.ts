import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'intro-home-routing',
	templateUrl: './home-routing.component.html',
	styleUrls: ['./home-routing.component.css']
})
export class HomeRoutingComponent implements OnInit {

	constructor(
		private router: Router
	) {
	}

	ngOnInit() {

	}

	onLoadServer() {
		// navigate to:
		this.router.navigate(['/servers']);
	}
}
