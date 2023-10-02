import { Model, DataTypes } from 'sequelize';
import sequelize from './index';
 
class CarType extends Model {
  public id!: number;
  public name!: string;
  public static readonly tableName = 'car_types';
}

CarType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, 
    modelName: 'car_types',
    timestamps: false, 
  }
);

export default CarType;