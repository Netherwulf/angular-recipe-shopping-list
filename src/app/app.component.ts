import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipesVisible = true;
  shoppingListVisible = true;

  onVisibilityChanged(visibilityData: {recipesVisible: boolean, shoppingListVisible: boolean}) {
    this.recipesVisible = visibilityData.recipesVisible;
    this.shoppingListVisible = visibilityData.shoppingListVisible;
  }
}
