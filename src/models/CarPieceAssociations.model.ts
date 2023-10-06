import { Model, DataTypes } from 'sequelize';
import sequelize from './index';
import Cars from './Cars.model';
import Piece from './Piece.model';

class CarPieceAssociation extends Model {
  public id!: number;
  public car_id!: number;
  public piece_id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public static readonly tableName = 'car_piece_association';
}

CarPieceAssociation.init(
  {
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'car_id',
      references: {
        model: 'cars',
        key: 'id',
      },
    },
    pieceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'piece_id',
      references: {
        model: 'pieces',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'car_piece_association', 
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

// associação N:N
Cars.belongsToMany(Piece, {
  through: CarPieceAssociation,
  foreignKey: 'car_id',
  otherKey: 'piece_id',
  as: 'pieces', // --> não sei explicar o porque desta nomecltura, antes era cars
});


Piece.belongsToMany(Cars, {
  through: CarPieceAssociation,
  foreignKey: 'piece_id',
  otherKey: 'car_id',
  as: 'pieces',
});

export default CarPieceAssociation;