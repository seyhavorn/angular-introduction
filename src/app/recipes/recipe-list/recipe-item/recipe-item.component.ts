import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModel } from "../../../Model/recipe.model";

@Component({
  selector: 'intro-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel | undefined;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
