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
exports.MaintenanceController = void 0;
const maintenance_service_1 = __importDefault(require("../services/maintenance.service"));
class MaintenanceController {
    constructor(maitenanceService = new maintenance_service_1.default()) {
        this.maitenanceService = maitenanceService;
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
        this.deleteOne = this.deleteOne.bind(this);
        this.getById = this.getById.bind(this);
        this.getByCarId = this.getByCarId.bind(this);
        this.updateOne = this.updateOne.bind(this);
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { carId, description, date } = req.body;
                const mainetance = yield this.maitenanceService.createMaintenances({ carId, description, date });
                res.status(201).json(mainetance);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const maintenances = yield this.maitenanceService.getAllMaintenances();
                res.status(200).json(maintenances);
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
                const { id } = req.params;
                const maintenances = yield this.maitenanceService.getMaintenecesById(id);
                res.status(200).json(maintenances);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    getByCarId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { carId } = req.params;
                const numberCarId = Number(carId);
                const maintenances = yield this.maitenanceService.getMaintenecesByCarId(numberCarId);
                res.status(200).json(maintenances);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { description } = req.body;
                const maintenances = yield this.maitenanceService.updateById(id, description);
                res.status(200).json(maintenances);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const maintenances = yield this.maitenanceService.removeOne(id);
                res.status(200).json({ removed: maintenances });
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
}
exports.MaintenanceController = MaintenanceController;
