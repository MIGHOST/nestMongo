import { join } from 'path';
import { config } from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GoodsModule } from './goods/goods.module';
import { AppService } from './app.service';


config();
const { DB_U, DB_URI} = process.env;
@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],

    }),  
    MongooseModule.forRoot(`${DB_URI}`),
    GoodsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

