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
exports.DeletePiece = exports.UpdatePiece = exports.CreatePiece = exports.Pieces = void 0;
const type_graphql_1 = require("type-graphql");
const car_typeDefs_1 = require("./car.typeDefs");
let Pieces = class Pieces {
};
exports.Pieces = Pieces;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Pieces.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Pieces.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [car_typeDefs_1.Car]),
    __metadata("design:type", Array)
], Pieces.prototype, "cars", void 0);
exports.Pieces = Pieces = __decorate([
    (0, type_graphql_1.ObjectType)()
], Pieces);
let CreatePiece = class CreatePiece {
};
exports.CreatePiece = CreatePiece;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePiece.prototype, "name", void 0);
exports.CreatePiece = CreatePiece = __decorate([
    (0, type_graphql_1.InputType)()
], CreatePiece);
let UpdatePiece = class UpdatePiece {
};
exports.UpdatePiece = UpdatePiece;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UpdatePiece.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePiece.prototype, "name", void 0);
exports.UpdatePiece = UpdatePiece = __decorate([
    (0, type_graphql_1.InputType)()
], UpdatePiece);
let DeletePiece = class DeletePiece {
};
exports.DeletePiece = DeletePiece;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], DeletePiece.prototype, "id", void 0);
exports.DeletePiece = DeletePiece = __decorate([
    (0, type_graphql_1.InputType)()
], DeletePiece);
