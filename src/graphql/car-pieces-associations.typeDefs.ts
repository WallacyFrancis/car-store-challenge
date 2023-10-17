import { Field, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
export class CarPieceAssociations {
  [x: string]: any;
  @Field(() => ID)
  id: number;

  @Field()
  carId: number;

  @Field()
  pieceId: number;
}

@InputType()
export class CreateCarPieceAssociations {
  @Field()
  carId: string;

  @Field()
  pieceId: string;
}

@InputType()
export class DeleteAssociations {
  @Field()
  id: string;
}