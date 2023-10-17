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
const Cars_model_1 = __importDefault(require("../models/Cars.model"));
class CarService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Cars_model_1.default.findAll();
            return result;
        });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Cars_model_1.default.findByPk(id);
            return result;
        });
    }
    ;
    getCarByCarTypeId(carTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Cars_model_1.default.findAll({
                where: { 'car_type_id': carTypeId }
            });
            return result;
        });
    }
    update(id, name, age, carTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield Cars_model_1.default.update({ name, age, carTypeId }, { where: { id } });
            return result;
        });
    }
    ;
    create(name, age, carTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(carTypeId);
            const result = yield Cars_model_1.default.create({ name, age, carTypeId });
            return result;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Cars_model_1.default.destroy({ where: { id } });
            return result;
        });
    }
}
exports.default = CarService;
