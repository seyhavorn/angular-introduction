import {Component, OnInit} from '@angular/core';
import {RecipeInterface, RecipeModel} from "./recipe.model";

@Component({
  selector: 'intro-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Adf dfd fdf dfd fd fdf dfd f', 'ssdfsdfsdfsdfs', 'https://images.unsplash.com/photo-1684867933974-af23d25d6d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'),
    new RecipeModel('Adf dfd fdf asdasddfd fd fdf dfd f', 'ssdasdasdfsdfsdfsdfs', 'https://plus.unsplash.com/premium_photo-1675826725982-e8508781c558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'),
  ];

  constructor() {
  }

  ngOnInit() {
    console.log(this.recipes);
  }

}
