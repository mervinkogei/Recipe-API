import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';

@Module({
  providers: [RecipeService],
  controllers: [RecipeController]
})
export class RecipeModule {}
