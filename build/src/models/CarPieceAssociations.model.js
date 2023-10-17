"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const Cars_model_1 = __importDefault(require("./Cars.model"));
const Piece_model_1 = __importDefault(require("./Piece.model"));
class CarPieceAssociation extends sequelize_1.Model {
}
CarPieceAssociation.tableName = 'car_piece_association';
CarPieceAssociation.init({
    carId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'car_id',
        references: {
            model: 'cars',
            key: 'id',
        },
    },
    pieceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'piece_id',
        references: {
            model: 'pieces',
            key: 'id',
        },
    },
}, {
    sequelize: index_1.default,
    underscored: true,
    modelName: 'car_piece_association',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
// associação N:N
Cars_model_1.default.belongsToMany(Piece_model_1.default, {
    through: CarPieceAssociation,
    foreignKey: 'car_id',
    otherKey: 'piece_id',
    as: 'pieces',
});
Piece_model_1.default.belongsToMany(Cars_model_1.default, {
    through: CarPieceAssociation,
    foreignKey: 'piece_id',
    otherKey: 'car_id',
    as: 'cars',
});
exports.default = CarPieceAssociation;
