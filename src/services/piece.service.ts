import IPiece from "../interfaces/Piece.interface";
import Piece from "../models/Piece.model";

export default class PieceService {
  public async getAll(): Promise<IPiece[]> {
    const result = await Piece.findAll();
    return result;
  };

  public async getById(id: number): Promise<IPiece | null> {
    const result = await Piece.findByPk(id);
    return result;
  };

  public async update(id: number, name: string): Promise<number | null> {
    const [result] = await Piece.update(
      { name },
      { where: { id }},
    );
    return result;
  };

  public async create(name: string): Promise<IPiece> {
    const result = await Piece.create({ name });
    return result;
  }

  public async remove(id: number): Promise<number | null> {
    const result = await Piece.destroy({ where: { id } });
    return result
  }
};