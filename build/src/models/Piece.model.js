"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const Cars_model_1 = __importDefault(require("./Cars.model"));
const CarPieceAssociations_model_1 = __importDefault(require("./CarPieceAssociations.model"));
class Piece extends sequelize_1.Model {
}
Piece.tableName = 'pieces';
;
Piece.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    modelName: 'pieces',
    timestamps: false,
});
Piece.belongsToMany(Cars_model_1.default, {
    through: CarPieceAssociations_model_1.default,
    foreignKey: 'piece_id',
    otherKey: 'car_id',
    as: 'cars'
});
exports.default = Piece;
