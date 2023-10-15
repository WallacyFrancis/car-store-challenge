import ICarType from "../interfaces/CarType.interface";
import CarType from "../models/CarType.model";
import Cars from "../models/Cars.model";

export default class CarTypeService {
  public async getAll(): Promise<ICarType[]> {
    const result = await CarType.findAll();
    return result;
  };

  public async getById(id: number): Promise<ICarType | null> {
    const result = await CarType.findOne({
      where: { id },
      // include: [{ model: Cars, as: 'car_type_id', attributes: { exclude: ['created_at', 'updated_at']}}]
    });
    return result;
  };

  public async update(id: number, name: string): Promise<number | null> {
    const [result] = await CarType.update(
      { name },
      { where: { id }},
    );
    return result;
  };

  public async create(name: string): Promise<ICarType> {
    const result = await CarType.create({ name });
    return result;
  }

  public async remove(id: number): Promise<number | null> {
    const result = await CarType.destroy({ where: { id } });
    return result
  }
}