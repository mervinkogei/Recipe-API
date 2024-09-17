import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This makes ConfigModule globally available, so you don't need to import it in every module
    }),    
    MongooseModule.forRoot('mongodb+srv://vincentkipkiruikogei:HfxLnIaIgw1djXbz@cluster0.zpwkieq.mongodb.net/?retryWrites=true&w=majority'),
    RecipeModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
