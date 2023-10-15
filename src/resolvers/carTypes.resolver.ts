import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CarType, CreateCarType, UpdateCarType, DeleteCarType } from '../graphql/car-type.typeDefs';
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
  async carTypeId(@Arg('id') id: number) {
    const carType = await this.carTypeService.getById(id);
    return carType;
  }

  @Mutation(() => CarType)
  async createCarType(@Arg('input') input: CreateCarType) {
    const { name } = input
    const carType = await this.carTypeService.create(name);
    return carType;
  }

  @Mutation(() => CarType)
  async updateCarType(@Arg('input') input: UpdateCarType) {
    const { id, name } = input
    await this.carTypeService.update(id, name);
    const carType = await this.carTypeService.getById(id)
    return carType;
  }

  @Mutation(() => Boolean)
  async deleteCarType(@Arg('input') input: DeleteCarType) {
    const { id } = input
    await this.carTypeService.remove(id);
    return true;
  }
}