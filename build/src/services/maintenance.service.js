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
const Maintenances_model_1 = __importDefault(require("../mongo/model/Maintenances.model"));
class MaintenanceService {
    constructor(maintenances = new Maintenances_model_1.default()) {
        this.maintenances = maintenances;
    }
    createMaintenances(maintenance) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMaintenance = yield this.maintenances.create(maintenance);
            return newMaintenance;
        });
    }
    getAllMaintenances() {
        return __awaiter(this, void 0, void 0, function* () {
            const maintenances = yield this.maintenances.getAll();
            return maintenances;
        });
    }
    getMaintenecesByCarId(carId) {
        return __awaiter(this, void 0, void 0, function* () {
            const maintenance = yield this.maintenances.getByCarId(carId);
            return maintenance;
        });
    }
    getMaintenecesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const maintenance = yield this.maintenances.getById(id);
            return maintenance;
        });
    }
    updateById(id, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const maintenance = yield this.maintenances.updateById(id, description);
            return maintenance;
        });
    }
    removeOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.maintenances.removeOne(id);
            return result;
        });
    }
}
exports.default = MaintenanceService;
