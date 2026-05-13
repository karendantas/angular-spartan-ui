import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe';
import { TimeFormatPipe } from '../../pipes/format-tipe.pipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, TimeFormatPipe],
  templateUrl: './recipe-detail.html',
})
export class RecipeDetailComponent {
  recipe = input.required<Recipe>();
  goBack = output<void>();
}
