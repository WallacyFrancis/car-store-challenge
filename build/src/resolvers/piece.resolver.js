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
exports.PieceResolver = void 0;
const type_graphql_1 = require("type-graphql");
const pieces_typeDefs_1 = require("../graphql/pieces.typeDefs");
const car_typeDefs_1 = require("../graphql/car.typeDefs");
const piece_service_1 = __importDefault(require("../services/piece.service"));
const car_piece_association_service_1 = __importDefault(require("../services/car-piece-association.service"));
let PieceResolver = class PieceResolver {
    constructor(pieceService = new piece_service_1.default(), carPieceAssociationService = new car_piece_association_service_1.default()) {
        this.pieceService = pieceService;
        this.carPieceAssociationService = carPieceAssociationService;
    }
    pieces() {
        return __awaiter(this, void 0, void 0, function* () {
            const cars = yield this.pieceService.getAll();
            return cars;
        });
    }
    piece(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const numberId = Number(id);
            const piece = yield this.pieceService.getById(numberId);
            return piece;
        });
    }
    cars(piece) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const cars = yield this.carPieceAssociationService.getCarsFromPiecesId((_a = piece === null || piece === void 0 ? void 0 : piece.dataValues) === null || _a === void 0 ? void 0 : _a.id);
            console.log(cars);
            // return cars
            return [
                {
                    id: 1
                }
            ];
        });
    }
    createPiece(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = input;
            const piece = yield this.pieceService.create(name);
            return piece;
        });
    }
    updatePiece(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = input;
            const numberId = Number(id);
            yield this.pieceService.update(numberId, name);
            const piece = yield this.pieceService.getById(numberId);
            return piece;
        });
    }
    deletePiece(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = input;
            const numberId = Number(id);
            yield this.pieceService.remove(numberId);
            return true;
        });
    }
};
exports.PieceResolver = PieceResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [pieces_typeDefs_1.Pieces]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PieceResolver.prototype, "pieces", null);
__decorate([
    (0, type_graphql_1.Query)(() => pieces_typeDefs_1.Pieces),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PieceResolver.prototype, "piece", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [car_typeDefs_1.Car]),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pieces_typeDefs_1.Pieces]),
    __metadata("design:returntype", Promise)
], PieceResolver.prototype, "cars", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => pieces_typeDefs_1.Pieces),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pieces_typeDefs_1.CreatePiece]),
    __metadata("design:returntype", Promise)
], PieceResolver.prototype, "createPiece", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => pieces_typeDefs_1.Pieces),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pieces_typeDefs_1.UpdatePiece]),
    __metadata("design:returntype", Promise)
], PieceResolver.prototype, "updatePiece", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pieces_typeDefs_1.DeletePiece]),
    __metadata("design:returntype", Promise)
], PieceResolver.prototype, "deletePiece", null);
exports.PieceResolver = PieceResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => pieces_typeDefs_1.Pieces),
    __metadata("design:paramtypes", [Object, Object])
], PieceResolver);
