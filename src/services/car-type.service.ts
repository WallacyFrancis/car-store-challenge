import ICarType from "../interfaces/CarType.interface";
import CarType from "../models/CarType.model";
import sequelize from "../models"

export default class CarTypeService {
  public async getAll(): Promise<ICarType[]> {
    const result = await CarType.findAll();
    return result;
  }

  public async getById(id: number): Promise<ICarType | null> {
    console.log('chegou aqui')
    const result = await CarType.findByPk(id);
    return result;
  }

  public async update(id: number, name: string): Promise<number | null> {
    const [result] = await CarType.update(
      { name },
      { where: { id }},
    )
    return result;
  }

  public async create(name: string): Promise<ICarType> {
    // solução para inserção de dados após executar seeders
    await sequelize.query('SELECT setval(\'"car_types_id_seq"\', (SELECT MAX("id") FROM "car_types"))');
    const result = await CarType.create({ name })
    return result;
  }

  public async remove(id: number): Promise<number | null> {
    const result = await CarType.destroy({ where: { id } });
    return result
  }
}