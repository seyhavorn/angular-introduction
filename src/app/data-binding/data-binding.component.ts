import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'intro-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  username: string = '';
  status: string = 'online';
  random: number | undefined;

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {

  }

  resetUser() {
    this.username = '';
  }

  randomString(): void {
    this.random = Math.random();
  }
}
