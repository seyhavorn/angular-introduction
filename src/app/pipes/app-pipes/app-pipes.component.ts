import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intro-app-pipes',
  templateUrl: './app-pipes.component.html',
  styleUrls: ['./app-pipes.component.css'],
})
export class AppPipesComponent implements OnInit {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('statble');
    }, 2000);
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
  ];
  filteredStatus = '';

  ngOnInit(): void {
    console.log(`Here's is app pip!`);
  }

  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: ' small',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2023),
    });
  }
}
