// src/recipe/recipe.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto, UpdateRecipeDto } from './dto/recipe.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('recipes')
@UseGuards(AuthGuard('jwt'))
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

  @Put(':id')
  async updateRecipe(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return this.recipeService.update(id, updateRecipeDto);
  }
}
