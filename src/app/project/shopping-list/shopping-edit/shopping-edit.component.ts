import { Component, ElementRef, ViewChild } from '@angular/core';
import { IngredientModel } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../Services/shopping-list.service";

@Component({
	selector: 'intro-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
	@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef | undefined;
	@ViewChild('amountInput', {static: false}) amountInputRef: ElementRef | undefined;

	constructor(
			private slService: ShoppingListService
	) { }

	ngOnInit() {
	}

	onAddItem(): void {
		// @ts-ignore
		const ingName = this.nameInputRef.nativeElement.value;
		// @ts-ignore
		const ingAmount = this.amountInputRef.nativeElement.value;
		const newIngredient = new IngredientModel(ingName, ingAmount);
		// this.ingredientAdded.emit(newIngredient);
		this.slService.addIngredient(newIngredient);
	}
}
