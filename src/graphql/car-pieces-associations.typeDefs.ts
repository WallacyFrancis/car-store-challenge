import { Field, ObjectType, InputType } from 'type-graphql';
import { Car } from './car.typeDefs';
import { Pieces } from './pieces.typeDefs';

@ObjectType()
export class CarPieceAssociations {
  [x: string]: any;

  @Field()
  carId: Car;

  @Field()
  pieceId: Pieces;
}

@InputType()
export class CreateCarPieceAssociations {
  @Field()
  carId: string;

  @Field()
  pieceId: string;
}

@InputType()
export class DeleteCarPieceAssociations {
  @Field()
  carId: string;

  @Field()
  pieceId: string;
}