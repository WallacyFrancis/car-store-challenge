"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class CarPieceAssociation extends sequelize_1.Model {
}
CarPieceAssociation.tableName = 'car_piece_association';
CarPieceAssociation.init({
    car_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'cars',
            key: 'id',
        },
    },
    piece_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'pieces',
            key: 'id',
        },
    },
}, {
    sequelize: index_1.default,
    timestamps: true,
    modelName: 'car_piece_association',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
exports.default = CarPieceAssociation;
