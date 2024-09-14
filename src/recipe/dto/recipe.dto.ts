// src/recipe/dto/create-recipe.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateRecipeDto {
    readonly name: string;
    readonly ingredients: string[];
    readonly instructions: string;
    readonly category: string;
  }

// src/recipes/dto/update-recipe.dto.ts

export class UpdateRecipeDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsOptional()
  ingredients?: string[];
}

  