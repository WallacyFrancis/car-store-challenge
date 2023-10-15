import { Request, Response } from "express";
import MaintenanceService from "../services/maintenance.service";

export class MaintenanceController {
  maitenanceService: MaintenanceService;

  constructor(maitenanceService = new MaintenanceService()) {
    this.maitenanceService = maitenanceService;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { carId, description, date } = req.body;
      const mainetance = await this.maitenanceService.createMaintenances({carId, description, date})
      res.status(201).json(mainetance)
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const maintenances = await this.maitenanceService.getAllMaintenances()
      res.status(200).json(maintenances)
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }
}