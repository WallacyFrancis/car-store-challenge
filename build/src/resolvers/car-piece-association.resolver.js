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
exports.CarPieceAssociationResolver = void 0;
const car_piece_association_service_1 = __importDefault(require("../services/car-piece-association.service"));
class CarPieceAssociationResolver {
    constructor(carPieceAssociation = new car_piece_association_service_1.default()) {
        this.carPieceAssociation = carPieceAssociation;
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.update = this.update.bind(this);
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
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
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const association = yield this.carPieceAssociation.getById(id);
                if (!association)
                    res.status(404).send('Association not found');
                else
                    res.status(200).json(association);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Bad request');
            }
        });
    }
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
                res.status(500).send('Bad request');
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const carId = Number(req.body.carId);
                const pieceId = Number(req.body.pieceId);
                const association = yield this.carPieceAssociation.getById(id);
                if (!association) {
                    res.status(404).send('Association not found');
                }
                else {
                    yield this.carPieceAssociation.update(id, carId, pieceId);
                    res.status(200).json({ updated: `car id ${association.id}` });
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
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const association = yield this.carPieceAssociation.getById(id);
                if (!association) {
                    res.status(404).send('Car type not found');
                }
                else {
                    yield this.carPieceAssociation.remove(id);
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
exports.CarPieceAssociationResolver = CarPieceAssociationResolver;
