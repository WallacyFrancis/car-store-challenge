import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Maintenances, CreateMaintenance, UpdateMaintenance, DeleteMaintenance } from '../graphql/maintenances.typeDefs';
import MaintenanceService from '../services/maintenance.service';

@Resolver()
export class MaintenanceResolver {
  maitenanceService: MaintenanceService;

  constructor(maintenaceService = new MaintenanceService()) {
    this.maitenanceService = maintenaceService
  }

  @Query(() => [Maintenances])
  async maitenances() {
    const maitenances = await this.maitenanceService.getAllMaintenances();
    return maitenances;
  }

  @Query(() => [Maintenances])
  async maitenancesByCarId(@Arg('carId') carId: number) {
    const maitenances = await this.maitenanceService.getMaintenecesByCarId(carId);
    return maitenances;
  }

  @Query(() => Maintenances)
  async maitenancesById(@Arg('id') id: string) {
    const maitenances = await this.maitenanceService.getMaintenecesById(id);
    return maitenances;
  }

  @Mutation(() => Maintenances)
  async createMaintenance(@Arg('input') input: CreateMaintenance) {
    const { carId, description, date } = input
    const maintenanceInput = {
      carId: Number(carId),
      description,
      date
    }
    const maitenances = await this.maitenanceService.createMaintenances(maintenanceInput);
    return maitenances;
  }

  @Mutation(() => Maintenances)
  async updateMaintenance(@Arg('input') input: UpdateMaintenance) {
    const { id, description } = input
    const maitenances = await this.maitenanceService.updateById(id, description);
    return maitenances;
  }

  @Mutation(() => Boolean)
  async deleteMaintenance(@Arg('input') input: DeleteMaintenance) {
    const { id } = input
    await this.maitenanceService.removeOne(id);
    return true;
  }
}