import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IngredientModel } from "../../shared/ingredient.model";

@Component({
  selector: 'intro-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef | undefined;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    // @ts-ignore
    const ingName = this.nameInputRef.nativeElement.value;
    // @ts-ignore
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
