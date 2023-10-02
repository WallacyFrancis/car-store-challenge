import { Router } from "express";
import { CarTypeResolver } from "../resolvers/car-type.resolvers";

const router = Router();
const carTypeResolver = new CarTypeResolver();

// car-types
router.get('/car-types', carTypeResolver.getAll);
router.get('/car-types/:id', carTypeResolver.getById);
router.put('/car-types/:id', carTypeResolver.update);
router.post('/car-types', carTypeResolver.create);
router.delete('/car-types/:id', carTypeResolver.remove);

export default router;
