import { Component, input, Input, output } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
})
export class RecipeCard {
  recipe = input.required<Recipe>();
  recipeCardSelected = output<Recipe>();

  onCardClick() {
    this.recipeCardSelected.emit(this.recipe());
  }
}
