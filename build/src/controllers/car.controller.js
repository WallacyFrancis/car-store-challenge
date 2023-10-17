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
exports.CarController = void 0;
const car_service_1 = __importDefault(require("../services/car.service"));
class CarController {
    constructor(carService = new car_service_1.default()) {
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
                const cartypes = yield this.carService.getAll();
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
                const car = yield this.carService.getById(id);
                if (!car)
                    res.status(404).send('Car not found');
                else
                    res.status(200).json(car);
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
                const { name, age, carTypeId } = req.body;
                const car = yield this.carService.getById(id);
                if (!car) {
                    res.status(404).send('Car type not found');
                }
                else {
                    yield this.carService.update(id, name, age, carTypeId);
                    res.status(200).json({ updated: `car id ${car.id}` });
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
                const { name, age } = req.body;
                const carTypeId = Number(req.body.carTypeId);
                const createdCartype = yield this.carService.create(name, age, carTypeId);
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
                const car = yield this.carService.getById(id);
                if (!car) {
                    res.status(404).send('Car type not found');
                }
                else {
                    yield this.carService.remove(id);
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
exports.CarController = CarController;
