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
exports.DeleteAssociations = exports.CreateCarPieceAssociations = exports.CarPieceAssociations = void 0;
const type_graphql_1 = require("type-graphql");
let CarPieceAssociations = class CarPieceAssociations {
};
exports.CarPieceAssociations = CarPieceAssociations;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], CarPieceAssociations.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CarPieceAssociations.prototype, "carId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CarPieceAssociations.prototype, "pieceId", void 0);
exports.CarPieceAssociations = CarPieceAssociations = __decorate([
    (0, type_graphql_1.ObjectType)()
], CarPieceAssociations);
let CreateCarPieceAssociations = class CreateCarPieceAssociations {
};
exports.CreateCarPieceAssociations = CreateCarPieceAssociations;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCarPieceAssociations.prototype, "carId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCarPieceAssociations.prototype, "pieceId", void 0);
exports.CreateCarPieceAssociations = CreateCarPieceAssociations = __decorate([
    (0, type_graphql_1.InputType)()
], CreateCarPieceAssociations);
let DeleteAssociations = class DeleteAssociations {
};
exports.DeleteAssociations = DeleteAssociations;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DeleteAssociations.prototype, "id", void 0);
exports.DeleteAssociations = DeleteAssociations = __decorate([
    (0, type_graphql_1.InputType)()
], DeleteAssociations);
