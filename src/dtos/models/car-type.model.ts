import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CarTypes {
  @Field()
  id: number;
  
  @Field()
  name: string;
}