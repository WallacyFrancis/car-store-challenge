import { Field, ObjectType, InputType, ID } from 'type-graphql';
import { CarType } from './car-type.typeDefs';

@ObjectType()
export class Car {
  [x: string]: any;
 
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  carTypeId: number;

  @Field()
  carType: CarType
}

@InputType()
export class CreateCar {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  carTypeId: number;
}

@InputType()
export class UpdateCar {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  carTypeId: number;
}

@InputType()
export class DeleteCar {
  @Field(() => ID)
  id: number;
}
