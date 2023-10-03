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
exports.ValidationsCarType = void 0;
const car_type_service_1 = __importDefault(require("../services/car-type.service"));
class ValidationsCarType {
    constructor(carTypeService = new car_type_service_1.default()) {
        this.carTypeService = carTypeService;
        this.isValidId = this.isValidId.bind(this);
        this.isValidName = this.isValidName.bind(this);
    }
    isValidId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!isNaN(Number(id))) {
                res.status(400).send('Id must be a number').end();
            }
            next();
        });
    }
    isValidName(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.params;
            if (!name) {
                res.status(400).send('Name is required').end(); //
            }
            next();
        });
    }
}
exports.ValidationsCarType = ValidationsCarType;
