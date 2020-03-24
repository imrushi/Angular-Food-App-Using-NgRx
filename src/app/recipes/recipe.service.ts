import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnitzel',
			'A super-tasty Schnitzel - just awesome!',
			'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
			[ new Ingredient('Meat', 1), new Ingredient('French Fries', 20) ]
		),
		new Recipe(
			'Big Fat Burger',
			'What else you need to say?',
			'https://www.fatburgercanada.com/wp-content/uploads/2018/09/fb18_FatCheeseBeer.png',
			[ new Ingredient('Buns', 2), new Ingredient('Meat', 1) ]
		)
	];

	constructor(private slService: ShoppingListService) {}

	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}
