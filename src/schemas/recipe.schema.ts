// src/recipe/schemas/recipe.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Recipe extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  ingredients: string[];

  @Prop({ required: true })
  instructions: string;

  @Prop()
  category: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
