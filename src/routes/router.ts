import { Router } from "express";
import { CarTypeResolver } from "../resolvers/car-type.resolver";
import { CarResolver } from "../resolvers/car.resolver";
import { PieceResolver } from "../resolvers/piece.resolver";

const router = Router();
const carTypeResolver = new CarTypeResolver();
const carResolver = new CarResolver();
const pieceresolver = new PieceResolver();

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

export default router;
