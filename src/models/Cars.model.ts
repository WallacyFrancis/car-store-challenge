import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

class Cars extends Model {
  public id!: number;
  public name: string;
  public age: number;
  public car_type_id: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public static readonly tableName = 'cars';
}

Cars.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    car_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'car_types', 
        key: 'id',
      },
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'cars',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

// Cars.belongsToMany(Piece, {
//   through: CarPieceAssociation,
//   foreignKey: 'car_id',
//   otherKey: 'piece_id',
//   as: 'cars',
// });

export default Cars;