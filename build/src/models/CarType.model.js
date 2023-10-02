"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const Cars_model_1 = __importDefault(require("./Cars.model"));
class CarType extends sequelize_1.Model {
}
CarType.tableName = 'car_types';
CarType.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    modelName: 'car_types',
    timestamps: false,
});
// association 1:N
CarType.hasMany(Cars_model_1.default, { foreignKey: 'car_type_id', as: 'car_type_id' });
exports.default = CarType;
