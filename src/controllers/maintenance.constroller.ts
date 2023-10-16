import { Request, Response } from "express";
import MaintenanceService from "../services/maintenance.service";

export class MaintenanceController {
  maitenanceService: MaintenanceService;

  constructor(maitenanceService = new MaintenanceService()) {
    this.maitenanceService = maitenanceService;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.getById = this.getById.bind(this);
    this.getByCarId = this.getByCarId.bind(this);
    this.updateOne = this.updateOne.bind(this);
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

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const maintenances = await this.maitenanceService.getMaintenecesById(id)
      res.status(200).json(maintenances)
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async getByCarId(req: Request, res: Response): Promise<void> {
    try {
      const { carId } = req.params
      const numberCarId = Number(carId)
      const maintenances = await this.maitenanceService.getMaintenecesByCarId(numberCarId)
      res.status(200).json(maintenances)
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async updateOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const { description } = req.body
      const maintenances = await this.maitenanceService.updateById(id, description)
      res.status(200).json(maintenances)
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async deleteOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const maintenances = await this.maitenanceService.removeOne(id)
      res.status(200).json({ removed: maintenances })
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }
}