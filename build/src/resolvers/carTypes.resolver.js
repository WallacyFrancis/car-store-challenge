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
exports.CarTypeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const car_type_typeDefs_1 = require("../graphql/car-type.typeDefs");
const car_type_service_1 = __importDefault(require("../services/car-type.service"));
let CarTypeResolver = class CarTypeResolver {
    constructor(carTypeService = new car_type_service_1.default()) {
        this.carTypeService = carTypeService;
    }
    carTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            const carTypes = yield this.carTypeService.getAll();
            return carTypes;
        });
    }
    carTypeId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const carType = yield this.carTypeService.getById(id);
            return carType;
        });
    }
    createCarType(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = input;
            const carType = yield this.carTypeService.create(name);
            return carType;
        });
    }
    updateCarType(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = input;
            yield this.carTypeService.update(id, name);
            const carType = yield this.carTypeService.getById(id);
            return carType;
        });
    }
    deleteCarType(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = input;
            yield this.carTypeService.remove(id);
            return true;
        });
    }
};
exports.CarTypeResolver = CarTypeResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [car_type_typeDefs_1.CarType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarTypeResolver.prototype, "carTypes", null);
__decorate([
    (0, type_graphql_1.Query)(() => car_type_typeDefs_1.CarType, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarTypeResolver.prototype, "carTypeId", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => car_type_typeDefs_1.CarType),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_type_typeDefs_1.CreateCarType]),
    __metadata("design:returntype", Promise)
], CarTypeResolver.prototype, "createCarType", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => car_type_typeDefs_1.CarType),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_type_typeDefs_1.UpdateCarType]),
    __metadata("design:returntype", Promise)
], CarTypeResolver.prototype, "updateCarType", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_type_typeDefs_1.DeleteCarType]),
    __metadata("design:returntype", Promise)
], CarTypeResolver.prototype, "deleteCarType", null);
exports.CarTypeResolver = CarTypeResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Object])
], CarTypeResolver);
