"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarPieceAssociations_model_1 = __importDefault(require("../models/CarPieceAssociations.model"));
class CarPieceAssociationService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield CarPieceAssociations_model_1.default.findAll();
            return result;
        });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield CarPieceAssociations_model_1.default.findByPk(id);
            return result;
        });
    }
    ;
    update(id, car_id, piece_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield CarPieceAssociations_model_1.default.update({ car_id, piece_id }, { where: { id } });
            return result;
        });
    }
    ;
    create(car_id, piece_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield CarPieceAssociations_model_1.default.create({ car_id, piece_id });
            return result;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield CarPieceAssociations_model_1.default.destroy({ where: { id } });
            return result;
        });
    }
}
exports.default = CarPieceAssociationService;
