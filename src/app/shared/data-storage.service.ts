import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-86501.firebaseio.com/recipes.json', this.recipeService.getRecipes())
      .pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));
  }

  fetchRecipes() {
    return this.http.get('https://ng-recipe-book-86501.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const data: Recipe[] = response.json();
          this.recipeService.setRecipes(data);
        }
      );
  }
}
