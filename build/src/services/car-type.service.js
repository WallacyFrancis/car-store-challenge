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
const CarType_model_1 = __importDefault(require("../models/CarType.model"));
const models_1 = __importDefault(require("../models"));
class CarTypeService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield CarType_model_1.default.findAll();
            return result;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('chegou aqui');
            const result = yield CarType_model_1.default.findByPk(id);
            return result;
        });
    }
    update(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield CarType_model_1.default.update({ name }, { where: { id } });
            return result;
        });
    }
    create(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield models_1.default.query('SELECT setval(\'"type_car_id_seq"\', (SELECT MAX("id") FROM "type_car"))');
            const result = yield CarType_model_1.default.create({ name });
            return result;
        });
    }
}
exports.default = CarTypeService;
