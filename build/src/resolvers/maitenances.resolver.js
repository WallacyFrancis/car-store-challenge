"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.MaintenanceResolver = void 0;
const type_graphql_1 = require("type-graphql");
const maintenances_typeDefs_1 = require("../graphql/maintenances.typeDefs");
const maintenance_service_1 = __importDefault(require("../services/maintenance.service"));
let MaintenanceResolver = class MaintenanceResolver {
    constructor(maintenaceService = new maintenance_service_1.default()) {
        this.maitenanceService = maintenaceService;
    }
    maitenances() {
        return __awaiter(this, void 0, void 0, function* () {
            const maitenances = yield this.maitenanceService.getAllMaintenances();
            return maitenances;
        });
    }
    maitenancesByCarId(carId) {
        return __awaiter(this, void 0, void 0, function* () {
            const maitenances = yield this.maitenanceService.getMaintenecesByCarId(carId);
            return maitenances;
        });
    }
    maitenancesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const maitenances = yield this.maitenanceService.getMaintenecesById(id);
            return maitenances;
        });
    }
    createMaintenance(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carId, description, date } = input;
            const maintenanceInput = {
                carId: Number(carId),
                description,
                date
            };
            const maitenances = yield this.maitenanceService.createMaintenances(maintenanceInput);
            return maitenances;
        });
    }
    updateMaintenance(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, description } = input;
            const maitenances = yield this.maitenanceService.updateById(id, description);
            return maitenances;
        });
    }
    deleteMaintenance(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = input;
            yield this.maitenanceService.removeOne(id);
            return true;
        });
    }
};
exports.MaintenanceResolver = MaintenanceResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [maintenances_typeDefs_1.Maintenances]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceResolver.prototype, "maitenances", null);
__decorate([
    (0, type_graphql_1.Query)(() => [maintenances_typeDefs_1.Maintenances]),
    __param(0, (0, type_graphql_1.Arg)('carId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MaintenanceResolver.prototype, "maitenancesByCarId", null);
__decorate([
    (0, type_graphql_1.Query)(() => maintenances_typeDefs_1.Maintenances),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MaintenanceResolver.prototype, "maitenancesById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => maintenances_typeDefs_1.Maintenances),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [maintenances_typeDefs_1.CreateMaintenance]),
    __metadata("design:returntype", Promise)
], MaintenanceResolver.prototype, "createMaintenance", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => maintenances_typeDefs_1.Maintenances),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [maintenances_typeDefs_1.UpdateMaintenance]),
    __metadata("design:returntype", Promise)
], MaintenanceResolver.prototype, "updateMaintenance", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [maintenances_typeDefs_1.DeleteMaintenance]),
    __metadata("design:returntype", Promise)
], MaintenanceResolver.prototype, "deleteMaintenance", null);
exports.MaintenanceResolver = MaintenanceResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Object])
], MaintenanceResolver);
