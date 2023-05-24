import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'intro-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  showSecret: boolean = false;
  logs: any[] = [];

  ngOnInit() {
    console.log('here directive component.');
  }

  toggleDetail() {
    this.showSecret = !this.showSecret;
    // this.logs.push(this.logs.length);
    this.logs.push(new Date());
  }
}
