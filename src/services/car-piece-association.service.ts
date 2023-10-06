import ICarPieceAssociation from "../interfaces/CarPieceAssociation";
import CarPieceAssociation from "../models/CarPieceAssociations.model";
import Cars from "../models/Cars.model";
import Piece from "../models/Piece.model";

export default class CarPieceAssociationService {
  public async getAll(): Promise<ICarPieceAssociation[]> {
    const result = await CarPieceAssociation.findAll();
    return result;
  };

  public async getPiecesFromCarsId(id: number) {
    const result = await Cars.findOne({
      where: { id },
      include: [{ model: Piece, as: 'pieces', through: { attributes: [] }}]
    })
    return result;
  }

  public async getById(id: number): Promise<ICarPieceAssociation | null> {
    const result = await CarPieceAssociation.findByPk(id);
    return result;
  };

  public async update(id: number, car_id: number, piece_id: number): Promise<number | null> {
    const [result] = await CarPieceAssociation.update(
      { car_id, piece_id },
      { where: { id }},
    );
    return result;
  };

  public async create(car_id: number, piece_id: number): Promise<ICarPieceAssociation> {
    const result = await CarPieceAssociation.create({ car_id, piece_id });
    return result;
  }

  public async remove(id: number): Promise<number | null> {
    const result = await CarPieceAssociation.destroy({ where: { id } });
    return result
  }
}