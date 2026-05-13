import { Recipe } from '../models/recipe';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: 1,
    title: 'Shake Energético Pré-Esteira',
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&q=80',
    ingredients: [
      '1 banana congelada',
      '200ml de leite',
      '1 colher de aveia',
      '1 scoop de whey',
      'Café solúvel a gosto',
    ],
    instructions:
      'Bata tudo no liquidificador até ficar homogêneo. Ideal para tomar 30 minutos antes da sua 1 hora diária de exercícios para garantir o pique.',
    difficulty: 'Fácil',
    prepTime: 5,
  },
  {
    id: 2,
    title: 'Suco Vermelho Antioxidante',
    category: 'Saúde',
    image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=500&q=80',
    ingredients: [
      '1 beterraba pequena',
      '5 morangos',
      'Suco de 1 laranja',
      'Pedacinho de gengibre',
    ],
    instructions:
      'Passe na centrífuga ou bata no liquidificador com um pouco de água e coe. Excelente adição alimentar que auxilia na manutenção de fios capilares pigmentados.',
    difficulty: 'Fácil',
    prepTime: 10,
  },
  {
    id: 3,
    title: 'Macarrão de Panela de Pressão',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80',
    ingredients: [
      '500g de macarrão penne',
      '1 sachê de molho de tomate',
      '1 caixinha de creme de leite',
      '200g de mussarela',
    ],
    instructions:
      'Coloque o macarrão, o molho e água o suficiente para cobrir tudo. Feche a panela. Quando pegar pressão, conte 3 minutos e desligue. Misture o creme de leite e o queijo. Perfeito para quando o tempo está curto entre as sessões de código.',
    difficulty: 'Médio',
    prepTime: 15,
  },
];
