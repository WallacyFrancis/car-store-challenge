"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_type_resolver_1 = require("../resolvers/car-type.resolver");
const car_resolver_1 = require("../resolvers/car.resolver");
const piece_resolver_1 = require("../resolvers/piece.resolver");
const car_piece_association_resolver_1 = require("../resolvers/car-piece-association.resolver");
const router = (0, express_1.Router)();
const carTypeResolver = new car_type_resolver_1.CarTypeResolver();
const carResolver = new car_resolver_1.CarResolver();
const pieceresolver = new piece_resolver_1.PieceResolver();
const carPieceAssociationResolver = new car_piece_association_resolver_1.CarPieceAssociationResolver();
// car-types
router.get('/car-types', carTypeResolver.getAll);
router.get('/car-types/:id', carTypeResolver.getById);
router.put('/car-types/:id', carTypeResolver.update);
router.post('/car-types', carTypeResolver.create);
router.delete('/car-types/:id', carTypeResolver.remove);
// cars
router.get('/cars', carResolver.getAll);
router.get('/cars/:id', carResolver.getById);
router.put('/cars/:id', carResolver.update);
router.post('/cars', carResolver.create);
router.delete('/cars/:id', carResolver.remove);
// piece
router.get('/pieces', pieceresolver.getAll);
router.get('/pieces/:id', pieceresolver.getById);
router.put('/pieces/:id', pieceresolver.update);
router.post('/pieces', pieceresolver.create);
router.delete('/pieces/:id', pieceresolver.remove);
// associations
router.get('/associations', carPieceAssociationResolver.getAll);
router.get('/associations/:id', carPieceAssociationResolver.getById);
router.put('/associations/:id', carPieceAssociationResolver.update);
router.post('/associations', carPieceAssociationResolver.create);
router.delete('/associations/:id', carPieceAssociationResolver.remove);
exports.default = router;
