import { Model, DataTypes } from 'sequelize';
import sequelize from './index';
import Cars from './Cars.model';
 
class CarType extends Model {
  public id!: number;
  public name: string;
  public static readonly tableName = 'car_types';
}

CarType.init(
  {
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

// association 1:N
CarType.hasMany(Cars, { foreignKey: 'car_type_id', as: 'car_type_id' })

export default CarType;