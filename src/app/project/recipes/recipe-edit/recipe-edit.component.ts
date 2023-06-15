import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'intro-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode: boolean = false;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName;
    let recipeImagePath;
    let recipeDescription;

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
/*
  1. Directive Deep Dive
  2. Dependenct injection & Service
  3.Routing:
    - Navigate to another component,
    - Active route,
    - Child Route,
    - Parent Route,
    - Passing param to links
    - Active route
  5.Understanding Observable:
  6. Form:
    - Template-Driven (TD)
    - Reactive Form.
    - How to validate data in form
    - Form Array
    - Form Control
    - Form Group
    - Display message when Error.
*/
