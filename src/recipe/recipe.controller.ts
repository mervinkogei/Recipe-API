// src/recipe/recipe.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/recipe.dto';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  @Get()
  async findAll() {
    return this.recipeService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.recipeService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.recipeService.delete(id);
  }
}
