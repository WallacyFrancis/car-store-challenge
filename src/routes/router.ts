import { Router } from "express";
import { CarTypeResolver } from "../resolvers/car-type.resolvers";
import { CarResolver } from "../resolvers/car.resolvers";

const router = Router();
const carTypeResolver = new CarTypeResolver();
const carResolver = new CarResolver();

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

export default router;
