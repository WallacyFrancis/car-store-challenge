import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CarType, CreateCarType } from '../graphql/car-type.schema';
import CarTypeService from '../services/car-type.service';

@Resolver()
export class CarTypeResolver {
  carTypeService: CarTypeService;

  constructor(carTypeService = new CarTypeService()) {
    this.carTypeService = carTypeService;
  }

  @Query(() => [CarType])
  async carTypes() {
    const carTypes = await this.carTypeService.getAll();
    return carTypes;
  }

  @Query(() => CarType, { nullable: true })
  async carTypeById(@Arg('id') id: number) {
    const carType = await this.carTypeService.getById(id);
    return carType;
  }

  @Mutation(() => CarType)
  async createCarType(@Arg('name') name: string) {
    const carType = await this.carTypeService.create(name);
    return carType;
  }

  @Mutation(() => CarType)
  async updateCarType(@Arg('id') id: number, @Arg('name') name: string) {
    const carType = await this.carTypeService.update(id, name);
    return carType;
  }
}