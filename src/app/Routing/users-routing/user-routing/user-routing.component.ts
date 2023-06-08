import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'intro-user-routing',
  templateUrl: './user-routing.component.html',
  styleUrls: ['./user-routing.component.css']
})
export class UserRoutingComponent implements OnInit, OnDestroy {

  user?: { id: number; name: string; };
  paramSubscriptions: Subscription | undefined;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.paramSubscriptions = this.route.params.subscribe((params: Params) => {
      this.user = {
        id: +params['id'],
        name: params['name']
      }
    })
  }

  ngOnDestroy() {
    this.paramSubscriptions?.unsubscribe();
  }
}
