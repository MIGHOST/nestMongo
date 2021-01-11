
import { ObjectType, Field, Int} from "type-graphql";

@ObjectType()
export class GoodsInput {
  @Field()
  readonly name: string;
  @Field(()=>Int)
  readonly price: number;
}
