import { Component, OnInit, SimpleChange } from '@angular/core';
import { Binding } from "../form/form.component";

@Component({
  selector: 'intro-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forms: Binding[] = [
    {
      'name': 'Jok Ma',
      'description': 'Artis at DIR.'
    },
    {
      'name': 'Prom Somnang',
      'description': 'Kick boxing.'
    },
    {
      'name': 'Prom Somnang',
      'description': 'Kick boxing.'
    },
    {
      'name': 'Prom Somnang',
      'description': 'Kick boxing.'
    }
  ];

  ngOnInit() {

  }

  OnDataOutput() {
    console.log('Hello');
  }

}
