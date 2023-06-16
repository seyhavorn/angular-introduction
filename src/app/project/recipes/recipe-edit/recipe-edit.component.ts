import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    const recipe = this.editMode ? this.recipeService.getRecipe(this.id) : null;
    this.recipeForm = new FormGroup({
      name: new FormControl(recipe?.name, Validators.required),
      imagePath: new FormControl(recipe?.imagePath, Validators.required),
      description: new FormControl(recipe?.description, Validators.required),
      ingredients: new FormArray(
        (recipe?.ingredients || []).map(
          (ingredient) =>
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
        )
      ),
    });
  }

  getIngredientsForm() {
    const ingredientsForm = this.recipeForm.get('ingredients');
    if (ingredientsForm instanceof FormArray) {
      return ingredientsForm.controls;
    }
    return [];
  }

  // private initForm() {
  // 	let recipeName;
  // 	let recipeImagePath;
  // 	let recipeDescription;
  // 	let recipeIngredients = new FormArray([]);

  // 	if (this.editMode) {
  // 		const recipe = this.recipeService.getRecipe(this.id);
  // 		recipeName = recipe.name;
  // 		recipeImagePath = recipe.imagePath;
  // 		recipeDescription = recipe.description;

  // 		if (recipe['ingredients']) {
  // 			for (let ingredient of recipe.ingredients) {
  //         recipeIngredients.push({
  //           name: new FormControl(ingredient.name),
  //           amount: new FormControl(ingredient.amount)
  //         })
  // 				// recipeIngredients.push({
  //         //     name: new FormControl(ingredient.name),
  //         //     amount: new FormControl(ingredient.amount)
  //         //   })
  // 			}
  // 		}
  // 	}

  // 	this.recipeForm = new FormGroup({
  // 		name: new FormControl(recipeName),
  // 		imagePath: new FormControl(recipeImagePath),
  // 		description: new FormControl(recipeDescription),
  // 		ingredients: recipeIngredients
  // 	});
  // }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    // const newRecipe = new RecipeModel(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
