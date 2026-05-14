import { Component, signal, computed, input, output } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeCard } from '../recipe-card/recipe-card';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.html',
  imports: [RecipeCard]
})
export class RecipeListComponent {
  recipes = input.required<Recipe[]>();
  selectRecipe = output<Recipe>();

  searchTerm = signal('');

  filteredRecipes = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.recipes().filter(
      (r) => r.title.toLowerCase().includes(term) || r.category.toLowerCase().includes(term),
    );
  });

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  onSelect(recipe: Recipe) {
    this.selectRecipe.emit(recipe);
  }
}
