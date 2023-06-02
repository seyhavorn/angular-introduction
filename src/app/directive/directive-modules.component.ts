import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intro-directive-modules',
  templateUrl: './directive-modules.component.html',
  styleUrls: ['./directive-modules.component.css'],
})
export class DirectiveModulesComponent implements OnInit {
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 10;

  ngOnInit(): void {
  }

  checkOnlyOdd() {
    this.onlyOdd = !this.onlyOdd;
  }
}
