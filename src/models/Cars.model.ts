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
    carTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "car_type_id",
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

export default Cars;