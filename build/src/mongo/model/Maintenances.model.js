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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class MaintenancesModel {
    constructor() {
        this.schema = new mongoose_1.Schema({
            description: { type: String, required: true },
            carId: { type: Number, required: true },
            date: { type: String, required: true }
        });
        this.model = mongoose_1.models.Maintenance || (0, mongoose_1.model)('Maintenance', this.schema);
    }
    create(maintenance) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(Object.assign({}, maintenance));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findById(id);
        });
    }
    getByCarId(carId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find({ carId: carId });
        });
    }
    updateById(id, description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.findOneAndUpdate({ _id: id }, { $set: { description } });
            return yield this.model.findById(id);
        });
    }
    removeOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.deleteOne({ _id: id });
            return true;
        });
    }
}
;
exports.default = MaintenancesModel;
