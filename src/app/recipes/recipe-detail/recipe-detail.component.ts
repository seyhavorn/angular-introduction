import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from "../../Model/recipe.model";

@Component({
  selector: 'intro-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: RecipeModel | undefined;

  ngOnInit() {
    console.log('Here');
  }
}
