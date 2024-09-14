import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [
    
    MongooseModule.forRoot('mongodb+srv://vincentkipkiruikogei:HfxLnIaIgw1djXbz@cluster0.zpwkieq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    RecipeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
