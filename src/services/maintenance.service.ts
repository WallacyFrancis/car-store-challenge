import IMaintenances from "../interfaces/Maintenances.interface";
import MaintenancesModel from "../models/Maintenances.model";

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
}