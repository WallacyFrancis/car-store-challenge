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
exports.CarTypeResolver = void 0;
const car_type_service_1 = __importDefault(require("../services/car-type.service"));
const car_service_1 = __importDefault(require("../services/car.service"));
class CarTypeResolver {
    constructor(carTypeService = new car_type_service_1.default(), carService = new car_service_1.default()) {
        this.carTypeService = carTypeService;
        this.carService = carService;
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.update = this.update.bind(this);
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cartypes = yield this.carTypeService.getAll();
                res.status(200).json(cartypes);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const cartype = yield this.carTypeService.getById(id);
                if (!cartype)
                    res.status(404).send('Car type not found');
                else if (req.query.includeCar === 'true') {
                    const cars = yield this.carService.getCarByCarTypeId(id);
                    res.status(200).json({ cartype, cars });
                }
                else
                    res.status(200).json(cartype);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const { name } = req.body;
                const cartype = yield this.carTypeService.getById(id);
                if (!cartype) {
                    res.status(404).send('Car type not found');
                }
                else {
                    const cartypeUpdated = yield this.carTypeService.update(id, name);
                    res.status(200).json({ updated: cartypeUpdated });
                }
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const createdCartype = yield this.carTypeService.create(name);
                res.status(201).json(createdCartype);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const cartype = yield this.carTypeService.getById(id);
                if (!cartype) {
                    res.status(404).send('Car type not found');
                }
                else {
                    yield this.carTypeService.remove(id);
                    res.status(209).send(`Successfully removed`);
                }
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
}
exports.CarTypeResolver = CarTypeResolver;
