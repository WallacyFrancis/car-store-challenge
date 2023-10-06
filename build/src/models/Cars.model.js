"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const CarPieceAssociations_model_1 = __importDefault(require("./CarPieceAssociations.model"));
const Piece_model_1 = __importDefault(require("./Piece.model"));
class Cars extends sequelize_1.Model {
}
Cars.tableName = 'cars';
Cars.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    car_type_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'car_types',
            key: 'id',
        },
    },
}, {
    sequelize: index_1.default,
    modelName: 'cars',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
Cars.belongsToMany(Piece_model_1.default, {
    through: CarPieceAssociations_model_1.default,
    foreignKey: 'car_id',
    otherKey: 'piece_id',
    as: 'pieces'
});
exports.default = Cars;
