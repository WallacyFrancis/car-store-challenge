import ICar from "../interfaces/Car.interface";
import Cars from "../models/Cars.model";
import sequelize from "../models"

export default class CarService {
  public async getAll(): Promise<Cars[]> {
    const result = await Cars.findAll();
    return result;
  };

  public async getById(id: number): Promise<ICar | null> {
    const result = await Cars.findByPk(id);
    return result;
  };

  public async update(id: number, name: string, age: Date, carTypeId: number): Promise<number | null> {
    const [result] = await Cars.update(
      { name, age, carTypeId },
      { where: { id }},
    )
    return result;
  };

  public async create(name: string, age: Date, carTypeId: number): Promise<ICar> {
    // solução para inserção de dados após executar seeders
    await sequelize.query('SELECT setval(\'"cars_id_seq"\', (SELECT MAX("id") FROM "cars"))');
    const result = await Cars.create({ name, age, "car_type_id": carTypeId })
    return result;
  }

  public async remove(id: number): Promise<number | null> {
    const result = await Cars.destroy({ where: { id } });
    return result
  }
}