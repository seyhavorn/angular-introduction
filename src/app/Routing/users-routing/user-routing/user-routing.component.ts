import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'intro-user-routing',
	templateUrl: './user-routing.component.html',
	styleUrls: ['./user-routing.component.css']
})
export class UserRoutingComponent implements OnInit {

	user?: { id: number, name: string };

	constructor() {
	}

	ngOnInit() {
	}


  // constructor(private el: ElementRef) { }
  // @HostListener('click')
  // prevFunction() {
  //   var elm = this.el.nativeElement.parentElement.parentElement.children[0];
  //   var item = elm.getElementsByClassName("item")
  //   elm.prepend(item[item.length - 1])
  // }

}
