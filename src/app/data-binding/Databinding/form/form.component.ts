import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Binding {
  name?: string;
  description?: string;
}

@Component({
  selector: 'intro-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() binding: Binding | undefined;
  @Output() dataOutput = new EventEmitter<any>();

  ngOnInit() {

  }

}
