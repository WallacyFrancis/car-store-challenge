import { Query, Resolver, FieldResolver, Root, Mutation, Arg } from 'type-graphql';
import { Car, CreateCar, UpdateCar, DeleteCar } from '../graphql/car.typeDefs';
import { CarType } from '../graphql/car-type.typeDefs';

import CarService from '../services/car.service';
import CarTypeService from '../services/car-type.service';

@Resolver(() => Car)
export class CarResolver {
  carService: CarService;
  carTypeService: CarTypeService;

  constructor(
    carService = new CarService(),
    carTypeService = new CarTypeService(),
  ) {
    this.carService = carService;
    this.carTypeService = carTypeService;
  }

  @Query(() => [Car])
  async cars() {
    const cars = await this.carService.getAll();
    return cars;
  }

  @Query(() => Car)
  async car(@Arg('id') id: number) {
    const cars = await this.carService.getById(id);
    return cars;
  }

  @FieldResolver(() => CarType)
  async carType(@Root() car: Car) {
    const carType = await this.carTypeService.getById(car?.dataValues?.carTypeId);
    return carType;
  }

  @Mutation(() => Car)
  async createCar(@Arg('input') input: CreateCar) {
    const { name, age, carTypeId } = input;
    const car = await this.carService.create(name, age, carTypeId);
    return car;
  }

  @Mutation(() => Car)
  async updateCar(@Arg('input') input: UpdateCar) {
    const { id, name, age, carTypeId } = input;
    const numberId = Number(id)
    await this.carService.update(numberId, name, age, carTypeId);
    const car = await this.carService.getById(numberId);
    return car;
  }

  @Mutation(() => Boolean)
  async deleteCar(@Arg('input') input: DeleteCar) {
    const { id } = input;
    const numberId = Number(id)
    await this.carService.remove(numberId);
    return true;
  }

}