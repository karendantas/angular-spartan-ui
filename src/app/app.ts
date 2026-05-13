import { Component, signal } from '@angular/core';
import { RecipeListComponent } from './components/recipe-list/recipe-list';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail';
import { Recipe } from './models/recipe';
import { MOCK_RECIPES } from './data/recipes-mock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailComponent],
  templateUrl: './app.html',
})
export class App {
  // Estado Global do App
  allRecipes = signal<Recipe[]>(MOCK_RECIPES);
  selectedRecipe = signal<Recipe | null>(null);

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.set(recipe);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Sobe a página ao abrir a receita
  }

  clearSelection() {
    this.selectedRecipe.set(null);
  }
}
