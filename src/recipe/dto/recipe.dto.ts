// src/recipe/dto/create-recipe.dto.ts
export class CreateRecipeDto {
    readonly name: string;
    readonly ingredients: string[];
    readonly instructions: string;
    readonly category: string;
  }
  