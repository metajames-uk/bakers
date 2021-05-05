import { RecipeTypes } from '../types/recipe';

export class Recipe {
  idx: string;
  name: string;

  constructor(private recipe: RecipeTypes.RecipeResponse) {}
}
