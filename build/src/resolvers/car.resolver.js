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
exports.CarResolver = void 0;
const type_graphql_1 = require("type-graphql");
const car_typeDefs_1 = require("../graphql/car.typeDefs");
const car_type_typeDefs_1 = require("../graphql/car-type.typeDefs");
const pieces_typeDefs_1 = require("../graphql/pieces.typeDefs");
const car_service_1 = __importDefault(require("../services/car.service"));
const car_type_service_1 = __importDefault(require("../services/car-type.service"));
const car_piece_association_service_1 = __importDefault(require("../services/car-piece-association.service"));
let CarResolver = class CarResolver {
    constructor(carService = new car_service_1.default(), carTypeService = new car_type_service_1.default(), carPieceAssociationService = new car_piece_association_service_1.default()) {
        this.carService = carService;
        this.carTypeService = carTypeService;
        this.carPieceAssociationService = carPieceAssociationService;
    }
    cars() {
        return __awaiter(this, void 0, void 0, function* () {
            const cars = yield this.carService.getAll();
            return cars;
        });
    }
    car(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cars = yield this.carService.getById(id);
            return cars;
        });
    }
    carType(car) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const carType = yield this.carTypeService.getById((_a = car === null || car === void 0 ? void 0 : car.dataValues) === null || _a === void 0 ? void 0 : _a.carTypeId);
            return carType;
        });
    }
    pieces(car) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const pieces = yield this.carPieceAssociationService.getCarsFromPiecesId((_a = car === null || car === void 0 ? void 0 : car.dataValues) === null || _a === void 0 ? void 0 : _a.id);
            console.log(pieces);
            return [pieces];
        });
    }
    createCar(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, age, carTypeId } = input;
            const car = yield this.carService.create(name, age, carTypeId);
            return car;
        });
    }
    updateCar(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, age, carTypeId } = input;
            const numberId = Number(id);
            yield this.carService.update(numberId, name, age, carTypeId);
            const car = yield this.carService.getById(numberId);
            return car;
        });
    }
    deleteCar(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = input;
            const numberId = Number(id);
            yield this.carService.remove(numberId);
            return true;
        });
    }
};
exports.CarResolver = CarResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [car_typeDefs_1.Car]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "cars", null);
__decorate([
    (0, type_graphql_1.Query)(() => car_typeDefs_1.Car),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "car", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => car_type_typeDefs_1.CarType),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_typeDefs_1.Car]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "carType", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [pieces_typeDefs_1.Pieces]),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_typeDefs_1.Car]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "pieces", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => car_typeDefs_1.Car),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_typeDefs_1.CreateCar]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "createCar", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => car_typeDefs_1.Car),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_typeDefs_1.UpdateCar]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "updateCar", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_typeDefs_1.DeleteCar]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "deleteCar", null);
exports.CarResolver = CarResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => car_typeDefs_1.Car),
    __metadata("design:paramtypes", [Object, Object, Object])
], CarResolver);
