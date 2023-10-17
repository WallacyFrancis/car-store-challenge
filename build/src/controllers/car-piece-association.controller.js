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
exports.CarPieceAssociationController = void 0;
const car_piece_association_service_1 = __importDefault(require("../services/car-piece-association.service"));
class CarPieceAssociationController {
    constructor(carPieceAssociation = new car_piece_association_service_1.default()) {
        this.carPieceAssociation = carPieceAssociation;
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.getPiecesFromCarsId = this.getPiecesFromCarsId.bind(this);
        this.getCarsFromPieceId = this.getCarsFromPieceId.bind(this);
        this.removeAssociation = this.removeAssociation.bind(this);
    }
    ;
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const associations = yield this.carPieceAssociation.getAll();
                res.status(200).json(associations);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    ;
    getPiecesFromCarsId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const associationCars = yield this.carPieceAssociation.getPiecesFromCarsId(id);
                if (!associationCars)
                    res.status(404).send('Association not found');
                else
                    res.status(200).json(associationCars);
            }
            catch (err) {
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
    getCarsFromPieceId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const associationCars = yield this.carPieceAssociation.getCarsFromPiecesId(id);
                if (!associationCars)
                    res.status(404).send('Association not found');
                else
                    res.status(200).json(associationCars);
            }
            catch (err) {
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const carId = Number(req.body.carId);
                const pieceId = Number(req.body.pieceId);
                const associationCreated = yield this.carPieceAssociation.create(carId, pieceId);
                res.status(201).json(associationCreated);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
    removeAssociation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const carId = Number(req.body.carId);
                const pieceId = Number(req.body.pieceId);
                yield this.carPieceAssociation.removeAssociation(carId, pieceId);
                res.status(201).json({ removed: true });
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
}
exports.CarPieceAssociationController = CarPieceAssociationController;
