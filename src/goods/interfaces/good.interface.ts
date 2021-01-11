import { Document } from 'mongoose';
export interface Goods extends Document {
    readonly name: string;
    readonly price: number;
}