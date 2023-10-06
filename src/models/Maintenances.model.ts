import { Model, Schema, model, models } from 'mongoose';
import IMaintenances from '../interfaces/Maintenances.interface';

class MaintenancesModel {
  private schema: Schema;
  private model: Model<IMaintenances>;

  constructor() {
    this.schema = new Schema<IMaintenances>({
      description: { type: String, required: true },
      carId: { type: Number, required: true },
      date: { type: Date, required: true}
    });
    this.model = models.Maintenance || model('Maintenance', this.schema);
  }

  public async create(maintenance: IMaintenances): Promise<IMaintenances> {
    return this.model.create({ ...maintenance });
  }
};

export default MaintenancesModel;
