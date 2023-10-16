import { Router } from "express";
import { CarTypeController } from "../controllers/car-type.controller";
import { CarController } from "../controllers/car.controller";
import { PieceController } from "../controllers/piece.controller";
import { CarPieceAssociationController } from "../controllers/car-piece-association.controller";
import { MaintenanceController } from "../controllers/maintenance.constroller";

const router = Router();

const carTypeController = new CarTypeController();
const carColtroller = new CarController();
const pieceController = new PieceController();
const carPieceAssociationController = new CarPieceAssociationController();
const maintenanceController = new MaintenanceController();

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
router.post('/associations', carPieceAssociationController.create);
router.post('/associations/delete', carPieceAssociationController.removeAssociation);

//maintenanceResolver
router.get('/maintenance', maintenanceController.getAll);
router.put('/maintenance', maintenanceController.create);

export default router;
