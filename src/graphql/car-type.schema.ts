import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class CarType {
  @Field()
  id: number;

  @Field()
  name: string;
}

@InputType()
export class CreateCarType {
  @Field()
  name: string;

}
