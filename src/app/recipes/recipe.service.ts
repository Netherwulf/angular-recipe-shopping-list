import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://toriavey.com/images/2011/02/IMG_1544.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      1,
      'Big Fat Burger',
      'What else you need to say?',
      'https://st2.depositphotos.com/1004118/11101/i/950/depositphotos_111014890-stock-photo-big-fat-burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
