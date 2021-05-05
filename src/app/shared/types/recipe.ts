export namespace RecipeTypes {
  export interface RecipeResponse {
    idx: string;
    name: string;
    description: string;
    imageUrls: string[];
    ingredients: Ingredient[];
  }

  export interface Ingredient {
    name: string;
    amount: number;
  }
}
