import { Component, signal, computed, input, output } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.html',
})
export class RecipeListComponent {
  // Input: Recebe a lista completa de receitas do componente pai
  recipes = input.required<Recipe[]>();
  // Output: Avisa o componente pai quando uma receita é clicada
  selectRecipe = output<Recipe>();

  // Signal para armazenar o texto da busca
  searchTerm = signal('');

  // Signal computado: Refiltra a lista automaticamente sempre que 'searchTerm' ou 'recipes' mudarem
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
