import { Component } from '@angular/core';

@Component({
  selector: 'intro-users-routing',
  templateUrl: './users-routing.component.html',
  styleUrls: ['./users-routing.component.css']
})
export class UsersRoutingComponent {

  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
}
