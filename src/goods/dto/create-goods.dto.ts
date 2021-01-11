import { ObjectType, Field, ID, Int} from "type-graphql";

@ObjectType()
export class GoodsType {
  @Field(()=>ID)
  readonly id?: string;
  @Field()
  readonly name: string;
  @Field(()=>Int)
  readonly price: number;
}
