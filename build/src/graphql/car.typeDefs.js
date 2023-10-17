"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCar = exports.UpdateCar = exports.CreateCar = exports.Car = void 0;
const type_graphql_1 = require("type-graphql");
const car_type_typeDefs_1 = require("./car-type.typeDefs");
let Car = class Car {
};
exports.Car = Car;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], Car.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Car.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Car.prototype, "age", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Car.prototype, "carTypeId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", car_type_typeDefs_1.CarType)
], Car.prototype, "carType", void 0);
exports.Car = Car = __decorate([
    (0, type_graphql_1.ObjectType)()
], Car);
let CreateCar = class CreateCar {
};
exports.CreateCar = CreateCar;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCar.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateCar.prototype, "age", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateCar.prototype, "carTypeId", void 0);
exports.CreateCar = CreateCar = __decorate([
    (0, type_graphql_1.InputType)()
], CreateCar);
let UpdateCar = class UpdateCar {
};
exports.UpdateCar = UpdateCar;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UpdateCar.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCar.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateCar.prototype, "age", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateCar.prototype, "carTypeId", void 0);
exports.UpdateCar = UpdateCar = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateCar);
let DeleteCar = class DeleteCar {
};
exports.DeleteCar = DeleteCar;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], DeleteCar.prototype, "id", void 0);
exports.DeleteCar = DeleteCar = __decorate([
    (0, type_graphql_1.InputType)()
], DeleteCar);
