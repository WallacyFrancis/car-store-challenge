import { Field, ObjectType, InputType, ID } from 'type-graphql';
import { Car } from './car.typeDefs';

@ObjectType()
export class Pieces {
  [x: string]: any;
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Car])
  cars: Car[];
}

@InputType()
export class CreatePiece {
  @Field()
  name: string;
}

@InputType()
export class UpdatePiece {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@InputType()
export class DeletePiece {
  @Field(() => ID)
  id: string;
}