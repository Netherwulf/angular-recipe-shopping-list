import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() visibilityChange = new EventEmitter<{recipesVisible: boolean, shoppingListVisible: boolean}>();

  onShowRecipes() {
    this.visibilityChange.emit({
      recipesVisible: true,
      shoppingListVisible: false
    });
  }

  onShowShoppingList() {
    this.visibilityChange.emit({
      recipesVisible: false,
      shoppingListVisible: true
    });
  }

}
