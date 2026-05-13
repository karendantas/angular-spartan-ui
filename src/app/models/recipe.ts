export interface Recipe {
  id: number;
  title: string;
  category: string;
  image: string;
  ingredients: string[];
  instructions: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  prepTime: number; // em minutos
}
