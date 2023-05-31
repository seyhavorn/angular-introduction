import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intro-directive-modules',
  templateUrl: './directive-modules.component.html',
  styleUrls: ['./directive-modules.component.css'],
})
export class DirectiveModulesComponent implements OnInit {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;

  ngOnInit(): void {
    console.log('Hello');
  }

  checkOnlyOdd() {
    this.onlyOdd = !this.onlyOdd;
  }
}
