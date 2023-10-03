import { Request, Response, NextFunction } from "express";
import CarTypeService from "../services/car-type.service";

export class ValidationsCarType {
  carTypeService: CarTypeService;

  constructor(carTypeService = new CarTypeService()) {
    this.carTypeService = carTypeService;
    this.isValidId = this.isValidId.bind(this);
    this.isValidName = this.isValidName.bind(this);
  }

  async isValidId(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    if (!isNaN(Number(id))) {
      res.status(400).send('Id must be a number').end();
    }

    next()
  }

  async isValidName(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name } = req.params;

    if (!name) {
      res.status(400).send('Name is required').end(); //
    }

    next();
  }
}