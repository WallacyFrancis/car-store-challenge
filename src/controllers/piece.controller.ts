import { Request, Response } from "express";
import PieceService from "../services/piece.service";

export class PieceController {
  pieceService: PieceService;

  constructor(carTypeService = new PieceService()) {
    this.pieceService = carTypeService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  public async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const pieces = await this.pieceService.getAll();
      res.status(200).json(pieces);
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const piece = await this.pieceService.getById(id);
      if (!piece) res.status(404).send('Piece not found');
      else res.status(200).json(piece);
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { name } = req.body;

      const piece = await this.pieceService.getById(id);
      if (!piece) {
        res.status(404).send('Piece not found');
      } else {
        await this.pieceService.update(id, name)
        res.status(200).json({ updated: `piece id ${piece.id}` })
      }

    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body;
      const piece = await this.pieceService.create(name);
      res.status(201).json(piece)
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const piece = await this.pieceService.getById(id);
      if (!piece) {
        res.status(404).send('Piece not found');
      } else {
        await this.pieceService.remove(id)
        res.status(209).send(`Successfully removed`)
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('Bad request');
    }
  }
}