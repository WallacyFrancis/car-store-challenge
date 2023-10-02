import { Request, Response } from "express";
import CarTypeService from "../services/car-type.service";

export class CarTypeResolver {
  carTypeService: CarTypeService;

  constructor(carTypeService = new CarTypeService()) {
    this.carTypeService = carTypeService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  public async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const cartypes = await this.carTypeService.getAll();
      res.status(200).json(cartypes);
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const cartype = await this.carTypeService.getById(id);
      if (!cartype) res.status(404).send('Car type not found');
      else res.status(200).json(cartype);
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { name } = req.body;

      const cartype = await this.carTypeService.getById(id);
      if (!cartype) {
        res.status(404).send('Car type not found');
      } else {
        const cartypeUpdated = await this.carTypeService.update(id, name)
        res.status(200).json({ updated: cartypeUpdated })
      }

    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body;
      const createdCartype = await this.carTypeService.create(name);
      res.status(201).json(createdCartype)
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const cartype = await this.carTypeService.getById(id);
      if (!cartype) {
        res.status(404).send('Car type not found');
      } else {
        await this.carTypeService.remove(id)
        res.status(209).send(`Successfully removed`)
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }
}