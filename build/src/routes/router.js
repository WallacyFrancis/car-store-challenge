"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_type_resolvers_1 = require("../resolvers/car-type.resolvers");
const router = (0, express_1.Router)();
const carTypeResolver = new car_type_resolvers_1.CarTypeResolver();
// car-types
router.get('/car-types', carTypeResolver.getAll);
router.get('/car-types/:id', carTypeResolver.getById);
router.put('/car-types/:id', carTypeResolver.update);
router.post('/car-types', carTypeResolver.create);
router.delete('/car-types/:id', carTypeResolver.remove);
exports.default = router;
