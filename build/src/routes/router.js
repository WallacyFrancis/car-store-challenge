"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_type_controller_1 = require("../controllers/car-type.controller");
const car_controller_1 = require("../controllers/car.controller");
const piece_controller_1 = require("../controllers/piece.controller");
const car_piece_association_controller_1 = require("../controllers/car-piece-association.controller");
const maintenance_constroller_1 = require("../controllers/maintenance.constroller");
const router = (0, express_1.Router)();
const carTypeController = new car_type_controller_1.CarTypeController();
const carColtroller = new car_controller_1.CarController();
const pieceController = new piece_controller_1.PieceController();
const carPieceAssociationController = new car_piece_association_controller_1.CarPieceAssociationController();
const maintenanceController = new maintenance_constroller_1.MaintenanceController();
// car-types
router.get('/car-types', carTypeController.getAll);
router.get('/car-types/:id', carTypeController.getById);
router.put('/car-types/:id', carTypeController.update);
router.post('/car-types', carTypeController.create);
router.delete('/car-types/:id', carTypeController.remove);
// cars
router.get('/cars', carColtroller.getAll);
router.get('/cars/:id', carColtroller.getById);
router.put('/cars/:id', carColtroller.update);
router.post('/cars', carColtroller.create);
router.delete('/cars/:id', carColtroller.remove);
// piece
router.get('/pieces', pieceController.getAll);
router.get('/pieces/:id', pieceController.getById);
router.put('/pieces/:id', pieceController.update);
router.post('/pieces', pieceController.create);
router.delete('/pieces/:id', pieceController.remove);
// associations
router.get('/associations', carPieceAssociationController.getAll);
router.get('/associations/cars/:id', carPieceAssociationController.getPiecesFromCarsId);
router.get('/associations/pieces/:id', carPieceAssociationController.getCarsFromPieceId);
router.get('/associations/:id', carPieceAssociationController.getById);
router.post('/associations', carPieceAssociationController.create);
router.post('/associations/delete', carPieceAssociationController.removeAssociation);
router.delete('/associations/:id', carPieceAssociationController.remove);
//maintenanceResolver
router.get('/maintenance', maintenanceController.getAll);
router.get('/maintenance/:id', maintenanceController.getById);
router.get('/maintenance/car/:carId', maintenanceController.getByCarId);
router.post('/maintenance', maintenanceController.create);
router.put('/maintenance/:id', maintenanceController.updateOne);
router.delete('/maintenance/:id', maintenanceController.deleteOne);
exports.default = router;
