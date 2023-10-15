import { Request, Response } from "express";
import CarService from "../services/car.service";

export class CarController {
  carService: CarService;

  constructor(carService = new CarService()) {
    this.carService = carService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  public async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const cartypes = await this.carService.getAll();
      res.status(200).json(cartypes);
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const car = await this.carService.getById(id);
      if (!car) res.status(404).send('Car not found');
      else res.status(200).json(car);
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { name, age, carTypeId } = req.body;

      const car = await this.carService.getById(id);
      if (!car) {
        res.status(404).send('Car type not found');
      } else {
        await this.carService.update(id, name, age, carTypeId)
        res.status(200).json({ updated: `car id ${car.id}` })
      }

    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }
 
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, age } = req.body;
      const carTypeId = Number(req.body.carTypeId);
      const createdCartype = await this.carService.create(name, age, carTypeId);
      res.status(201).json(createdCartype)
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const car = await this.carService.getById(id);
      if (!car) {
        res.status(404).send('Car type not found');
      } else {
        await this.carService.remove(id)
        res.status(209).send(`Successfully removed`)
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }
}