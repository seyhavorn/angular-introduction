import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'intro-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  username: string = '';

  ngOnInit() {

  }

  resetUser() {
    this.username = '';
  }
}
