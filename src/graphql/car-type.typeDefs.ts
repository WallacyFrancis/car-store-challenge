import { Field, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
export class CarType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}

@InputType()
export class CreateCarType {
  @Field()
  name: string;

}

@InputType()
export class UpdateCarType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}

@InputType()
export class DeleteCarType {
  @Field({ nullable: false})
  id: number;
}
