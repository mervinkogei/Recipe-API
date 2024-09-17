import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Recipe, RecipeSchema } from '../schemas/recipe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }])
  ],
  providers: [RecipeService],
  controllers: [RecipeController]
})
export class RecipeModule { }
