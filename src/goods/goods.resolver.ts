import {Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { GoodsService } from './goods.services';
import { GoodsType } from './dto/create-goods.dto';
import { GoodsInput } from './update-goods.input';




@Resolver()
export class GoodsResolver{
    constructor(private readonly goodsService: GoodsService){}    

    @Query(()=>[GoodsType])
    async goods(): Promise<GoodsType[]>{
        return this.goodsService.findAll();
    }

    @Mutation(()=>GoodsType)
    async createGoods(@Args('input') input:GoodsInput): Promise<GoodsInput>{
        return this.goodsService.create(input)
    }

    @Mutation(() => GoodsType)
    async updateGoods(
      @Args('id') id: string,
      @Args('input') input: GoodsInput
    ): Promise<GoodsInput> {
      return this.goodsService.update(id, input);
    }
    
    @Mutation(() => GoodsType)
    async deleteGoods(@Args('id') id: string): Promise<GoodsInput> {
      return this.goodsService.delete(id);
    }

}