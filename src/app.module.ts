import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://<username>:<password>@cluster0.mongodb.net/recipe-finder?retryWrites=true&w=majority'),
    RecipeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
