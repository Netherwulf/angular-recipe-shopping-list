import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipes/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataStoreageService: DataStorageService,
              private authService: AuthService) {}

  onSelectShoppingList() {
    this.router.navigate(['/shopping-list'], {relativeTo: this.route});
  }

  onRecipeSave() {
    this.dataStoreageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onRecipesFetch() {
    this.dataStoreageService.fetchRecipes();
  }
}
