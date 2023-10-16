import { Model, Schema, model, models } from 'mongoose';
import IMaintenances from '../../interfaces/Maintenances.interface';

class MaintenancesModel {
  private schema: Schema;
  private model: Model<IMaintenances>;

  constructor() {
    this.schema = new Schema<IMaintenances>({
      description: { type: String, required: true },
      carId: { type: Number, required: true },
      date: { type: String, required: true}
    });
    this.model = models.Maintenance || model('Maintenance', this.schema);
  }

  public async create(maintenance: IMaintenances): Promise<IMaintenances> {
    return await this.model.create({ ...maintenance });
  }

  public async getAll(): Promise<IMaintenances[]> {
    return await this.model.find()
  }

  public async getById(id: string): Promise<IMaintenances | null> {
    return await this.model.findById(id)
  }

  public async getByCarId(carId: number): Promise<IMaintenances[]> {
    return await this.model.find({ carId: carId })
  }

  public async updateById(id: string, description: string): Promise<IMaintenances | null> {
    await this.model.findOneAndUpdate({ _id: id }, { $set: { description }})
    return await this.model.findById(id)
  }

  public async removeOne(id: string): Promise<boolean> {
    await this.model.deleteOne({ _id: id })
    return true
  }
};

export default MaintenancesModel;
