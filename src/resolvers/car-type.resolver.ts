import { Request, Response } from "express";
import CarTypeService from "../services/car-type.service";
import CarService from "../services/car.service";

export class CarTypeResolver {
  carTypeService: CarTypeService;
  carService: CarService;

  constructor(carTypeService = new CarTypeService(), carService = new CarService()) {
    this.carTypeService = carTypeService;
    this.carService = carService;

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
      else if (req.query.includeCar === 'true') {
        const cars = await this.carService.getCarByCarTypeId(id);
        res.status(200).json({ cartype, cars });
      }
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