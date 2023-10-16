import { Field, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
export class Maintenances {
  @Field(() => ID)
  id: string;

  @Field()
  carId: number;

  @Field()
  description: string;

  @Field()
  date: string;
}

@InputType()
export class CreateMaintenance {
  @Field()
  carId: number;

  @Field()
  description: string;

  @Field()
  date: string;
}

@InputType()
export class UpdateMaintenance {
  @Field(() => ID)
  id: string;

  @Field()
  description: string;
}

@InputType()
export class DeleteMaintenance {
  @Field(() => ID)
  id: string;
}