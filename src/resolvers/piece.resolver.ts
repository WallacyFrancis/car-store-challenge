import { Query, Resolver, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { Pieces, UpdatePiece, CreatePiece, DeletePiece } from '../graphql/pieces.typeDefs';
import { Car } from '../graphql/car.typeDefs';

import PieceService from '../services/piece.service';
import CarPieceAssociationService from '../services/car-piece-association.service';

@Resolver(() => Pieces)
export class PieceResolver {
  pieceService: PieceService;
  carPieceAssociationService: CarPieceAssociationService;

  constructor(
    pieceService = new PieceService(),
    carPieceAssociationService = new CarPieceAssociationService(),
    ) {
    this.pieceService = pieceService;
    this.carPieceAssociationService = carPieceAssociationService;
  }

  @Query(() => [Pieces])
  async pieces() {
    const pieces = await this.pieceService.getAll();
    return pieces;
  }

  @Query(() => Pieces)
  async piece(@Arg('id') id: string) {
    const numberId = Number(id);
    const piece = await this.pieceService.getById(numberId);
    return piece;
  }

  @FieldResolver(() => [Car])
  async cars(@Root() piece: Pieces) {
    console.log(piece);
    const cars = await this.carPieceAssociationService.getCarsFromPiecesId(piece?.dataValues?.id);
    return [cars];
  }

  @Mutation(() => Pieces)
  async createPiece(@Arg('input') input: CreatePiece) {
    const { name } = input;
    const piece = await this.pieceService.create(name);
    return piece;
  }

  @Mutation(() => Pieces)
  async updatePiece(@Arg('input') input: UpdatePiece) {
    const { id, name } = input;
    const numberId = Number(id);
    await this.pieceService.update(numberId, name);
    const piece = await this.pieceService.getById(numberId);
    return piece;
  }

  @Mutation(() => Boolean)
  async deletePiece(@Arg('input') input: DeletePiece) {
    const { id } = input;
    const numberId = Number(id);
    await this.pieceService.remove(numberId);
    return true;
  }
}