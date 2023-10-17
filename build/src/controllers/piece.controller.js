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
exports.PieceController = void 0;
const piece_service_1 = __importDefault(require("../services/piece.service"));
class PieceController {
    constructor(carTypeService = new piece_service_1.default()) {
        this.pieceService = carTypeService;
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.update = this.update.bind(this);
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pieces = yield this.pieceService.getAll();
                res.status(200).json(pieces);
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
                const id = Number(req.params.id);
                const piece = yield this.pieceService.getById(id);
                if (!piece)
                    res.status(404).send('Piece not found');
                else
                    res.status(200).json(piece);
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
                const { name } = req.body;
                const piece = yield this.pieceService.getById(id);
                if (!piece) {
                    res.status(404).send('Piece not found');
                }
                else {
                    yield this.pieceService.update(id, name);
                    res.status(200).json({ updated: `piece id ${piece.id}` });
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
                const { name } = req.body;
                const piece = yield this.pieceService.create(name);
                res.status(201).json(piece);
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
                const piece = yield this.pieceService.getById(id);
                if (!piece) {
                    res.status(404).send('Piece not found');
                }
                else {
                    yield this.pieceService.remove(id);
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
exports.PieceController = PieceController;
