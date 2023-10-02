import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

class Piece extends Model {
  public id!: number;
  public name: string;
  public static readonly tableName = 'pieces';
};

Piece.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, 
    modelName: 'pieces',
    timestamps: false, 
  }
);

export default Piece