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
exports.CarPieceAssociation = void 0;
const type_graphql_1 = require("type-graphql");
const car_pieces_associations_typeDefs_1 = require("../graphql/car-pieces-associations.typeDefs");
const car_piece_association_service_1 = __importDefault(require("../services/car-piece-association.service"));
let CarPieceAssociation = class CarPieceAssociation {
    constructor(carPieceAssociationsService = new car_piece_association_service_1.default()) {
        this.carPieceAssociationsService = carPieceAssociationsService;
    }
    carPieceAssociations() {
        return __awaiter(this, void 0, void 0, function* () {
            const associations = yield this.carPieceAssociationsService.getAll();
            console.log(associations);
            return associations;
        });
    }
    carPieceAssociation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const numberId = Number(id);
            const associations = yield this.carPieceAssociationsService.getById(numberId);
            return associations;
        });
    }
    createAssociations(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const numberCarId = Number(input.carId);
            const numberPieceId = Number(input.pieceId);
            const association = yield this.carPieceAssociationsService.create(numberCarId, numberPieceId);
            return association;
        });
    }
    deleteAssociations(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const numberId = Number(input.id);
            yield this.carPieceAssociationsService.remove(numberId);
            return true;
        });
    }
};
exports.CarPieceAssociation = CarPieceAssociation;
__decorate([
    (0, type_graphql_1.Query)(() => [car_pieces_associations_typeDefs_1.CarPieceAssociations]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarPieceAssociation.prototype, "carPieceAssociations", null);
__decorate([
    (0, type_graphql_1.Query)(() => car_pieces_associations_typeDefs_1.CarPieceAssociations),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarPieceAssociation.prototype, "carPieceAssociation", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => car_pieces_associations_typeDefs_1.CarPieceAssociations),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_pieces_associations_typeDefs_1.CreateCarPieceAssociations]),
    __metadata("design:returntype", Promise)
], CarPieceAssociation.prototype, "createAssociations", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_pieces_associations_typeDefs_1.DeleteAssociations]),
    __metadata("design:returntype", Promise)
], CarPieceAssociation.prototype, "deleteAssociations", null);
exports.CarPieceAssociation = CarPieceAssociation = __decorate([
    (0, type_graphql_1.Resolver)(() => car_pieces_associations_typeDefs_1.CarPieceAssociations),
    __metadata("design:paramtypes", [Object])
], CarPieceAssociation);
