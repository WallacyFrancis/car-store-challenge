import { Request, Response } from "express";
import CarPieceAssociationService from "../services/car-piece-association.service";

export class CarPieceAssociationController {
  carPieceAssociation: CarPieceAssociationService;

  constructor(carPieceAssociation = new CarPieceAssociationService()) {
    this.carPieceAssociation = carPieceAssociation;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.getPiecesFromCarsId = this.getPiecesFromCarsId.bind(this);
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

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const association = await this.carPieceAssociation.getById(id);
      if (!association) res.status(404).send('Association not found');
      else res.status(200).json(association);
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

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

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const carId = Number(req.body.carId);
      const pieceId = Number(req.body.pieceId);

      const association = await this.carPieceAssociation.getById(id);
      if (!association) {
        res.status(404).send('Association not found');
      } else {
        await this.carPieceAssociation.update(id, carId, pieceId)
        res.status(200).json({ updated: `car id ${association.id}` })
      }

    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
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

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const association = await this.carPieceAssociation.getById(id);
      if (!association) {
        res.status(404).send('Car type not found');
      } else {
        await this.carPieceAssociation.remove(id)
        res.status(209).send(`Successfully removed`)
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }
}