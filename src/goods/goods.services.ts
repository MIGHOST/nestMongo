import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GoodsType } from './dto/create-goods.dto';
import { GoodsInput } from './update-goods.input';
import { Goods } from './interfaces/good.interface';
@Injectable()
export class GoodsService {
  constructor(
    @InjectModel('Goods') private goodsModel: Model<Goods>) {}
    
    async create(createGoodsDto: GoodsInput): Promise <GoodsType> {
      const newGoods = new this.goodsModel(createGoodsDto);
      return await newGoods.save();
    }

    async findAll(): Promise<GoodsType[]>{
      return await this.goodsModel.find().exec();
    }

    async findOne(id:string): Promise<GoodsType>{
      return await this.goodsModel.findOne({_id:id});
    }

    async delete (id:string): Promise<GoodsType>{
      return await this.goodsModel.findByIdAndRemove(id);
    }

    async update(id:string, goods: GoodsInput): Promise<GoodsType> {
      return await this.goodsModel.findByIdAndUpdate(id, goods, {new: true})
    }
};