import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { CarPieceAssociations, CreateCarPieceAssociations, DeleteAssociations } from '../graphql/car-pieces-associations.typeDefs';
import CarPieceAssociationService from '../services/car-piece-association.service';

@Resolver(() => CarPieceAssociations)
export class CarPieceAssociation {
  carPieceAssociationsService: CarPieceAssociationService;

  constructor(carPieceAssociationsService = new CarPieceAssociationService()) {
    this.carPieceAssociationsService = carPieceAssociationsService
  }

  @Query(() => [CarPieceAssociations])
  async carPieceAssociations() {
    const associations = await this.carPieceAssociationsService.getAll();
    console.log(associations)
    return associations;
  }

  @Query(() => CarPieceAssociations)
  async carPieceAssociation(@Arg('id') id: string) {
    const numberId = Number(id)
    const associations = await this.carPieceAssociationsService.getById(numberId);
    return associations;
  }

  @Mutation(() => CarPieceAssociations)
  async createAssociations(@Arg('input') input: CreateCarPieceAssociations) {
    const numberCarId = Number(input.carId)
    const numberPieceId = Number(input.pieceId)
    const association = await this.carPieceAssociationsService.create(numberCarId, numberPieceId);
    return association;
  }

  @Mutation(() => Boolean)
  async deleteAssociations(@Arg('input') input: DeleteAssociations) {
    const numberId = Number(input.id)
    await this.carPieceAssociationsService.remove(numberId);
    return true;
  }
}