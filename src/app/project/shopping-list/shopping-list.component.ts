import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from '../Services/shopping-list.service';
import { LogginService } from '../Services/loggin.service';

@Component({
  selector: 'intro-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients?: IngredientModel[];
  private igChangeSub?: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private logginService: LogginService
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: IngredientModel[]) => {
        this.ingredients = ingredients;
      }
    );
    this.logginService.printLog('Hello from ShoppingList Component NgOnint!');
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditting.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub?.unsubscribe();
  }
}
