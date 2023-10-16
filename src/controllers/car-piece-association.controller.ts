import { Request, Response } from "express";
import CarPieceAssociationService from "../services/car-piece-association.service";

export class CarPieceAssociationController {
  carPieceAssociation: CarPieceAssociationService;

  constructor(carPieceAssociation = new CarPieceAssociationService()) {
    this.carPieceAssociation = carPieceAssociation;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.getPiecesFromCarsId = this.getPiecesFromCarsId.bind(this);
    this.getCarsFromPieceId = this.getCarsFromPieceId.bind(this);
    this.removeAssociation = this.removeAssociation.bind(this);
  };

  public async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const associations = await this.carPieceAssociation.getAll();
      res.status(200).json(associations);
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  };

  public async getPiecesFromCarsId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const associationCars = await this.carPieceAssociation.getPiecesFromCarsId(id);
      if (!associationCars) res.status(404).send('Association not found');
      else res.status(200).json(associationCars);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

  public async getCarsFromPieceId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const associationCars = await this.carPieceAssociation.getCarsFromPiecesId(id);
      if (!associationCars) res.status(404).send('Association not found');
      else res.status(200).json(associationCars);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
 
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const carId = Number(req.body.carId);
      const pieceId = Number(req.body.pieceId);
      const associationCreated = await this.carPieceAssociation.create(carId, pieceId);
      res.status(201).json(associationCreated)
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async removeAssociation(req: Request, res: Response): Promise<void> {
    try {
      const carId = Number(req.body.carId);
      const pieceId = Number(req.body.pieceId);
      await this.carPieceAssociation.removeAssociation(carId, pieceId);
      res.status(201).json({ removed: true });
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }
}