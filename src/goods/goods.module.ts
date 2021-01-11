import { GoodsSchema } from './schemas/goods.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { GoodsService } from './goods.services';
import { GoodsResolver } from './goods.resolver';

@Module({
  providers: [GoodsService, GoodsResolver],
  imports: [MongooseModule.forFeature([{name: 'Goods', schema: GoodsSchema}])],
})
export class GoodsModule {}
