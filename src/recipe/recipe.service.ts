// src/recipe/recipe.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from './schemas/recipe.schema';
import { CreateRecipeDto } from './dto/recipe.dto';

@Injectable()
export class RecipeService {
  constructor(@InjectModel(Recipe.name) private recipeModel: Model<Recipe>) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(createRecipeDto);
    return createdRecipe.save();
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  async findById(id: string): Promise<Recipe> {
    return this.recipeModel.findById(id).exec();
  }

  async delete(id: string): Promise<any> {
    return this.recipeModel.findByIdAndDelete(id).exec();
  }
}
