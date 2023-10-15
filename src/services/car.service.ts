import ICar from "../interfaces/Car.interface";
import Cars from "../models/Cars.model";

export default class CarService {
  public async getAll(): Promise<Cars[]> {
    const result = await Cars.findAll();
    return result;
  };

  public async getById(id: number): Promise<ICar | null> {
    const result = await Cars.findByPk(id);
    return result;
  };

  public async getCarByCarTypeId(carTypeId: number): Promise<Cars[] | null> {
    const result = await Cars.findAll({
      where: { 'car_type_id': carTypeId}
    });
    return result
  }

  public async update(id: number, name: string, age: number, carTypeId: number): Promise<number | null> {
    const [result] = await Cars.update(
      { name, age, carTypeId },
      { where: { id } },
    )
    return result;
  };

  public async create(name: string, age: number, carTypeId: number): Promise<ICar> {
    console.log(carTypeId)
    const result = await Cars.create({ name, age, carTypeId })
    return result;
  }

  public async remove(id: number): Promise<number | null> {
    const result = await Cars.destroy({ where: { id } });
    return result
  }
}