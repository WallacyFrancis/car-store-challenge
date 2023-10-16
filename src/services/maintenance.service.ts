import IMaintenances from "../interfaces/Maintenances.interface";
import MaintenancesModel from "../mongo/model/Maintenances.model";

export default class MaintenanceService {
  maintenances: MaintenancesModel;

  constructor(maintenances = new MaintenancesModel()) {
    this.maintenances = maintenances;
  }

  public async createMaintenances(maintenance: IMaintenances) {
    const newMaintenance = await this.maintenances.create(maintenance);
    return newMaintenance;
  }

  public async getAllMaintenances() {
    const maintenances = await this.maintenances.getAll();
    return maintenances;
  }

  public async getMaintenecesByCarId(carId: number) {
    const maintenance = await this.maintenances.getByCarId(carId);
    return maintenance;
  }

  public async getMaintenecesById(id: string) {
    const maintenance = await this.maintenances.getById(id);
    return maintenance;
  }

  public async updateById(id: string, description: string) {
    const maintenance = await this.maintenances.updateById(id, description);
    return maintenance;
  }

  public async removeOne(id: string) {
    const result = await this.maintenances.removeOne(id);
    return result;
  }
}