import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'intro';
  pro: boolean = true;

  constructor(
      private http: HttpClient
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.pro = false;
    }, 1000);
  }
}
