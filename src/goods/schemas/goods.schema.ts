import * as mongoose from 'mongoose';

export const GoodsSchema = new mongoose.Schema({
  name: String,
  price: Number
})