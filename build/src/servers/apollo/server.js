"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const node_path_1 = __importDefault(require("node:path"));
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const carTypes_resolver_1 = require("../../resolvers/carTypes.resolver");
const car_resolver_1 = require("../../resolvers/car.resolver");
const piece_resolver_1 = require("../../resolvers/piece.resolver");
const maitenances_resolver_1 = require("../../resolvers/maitenances.resolver");
const car_piece_association_resolver_1 = require("../../resolvers/car-piece-association.resolver");
const ConnectionMDB_1 = __importDefault(require("../../mongo/model/ConnectionMDB"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield (0, type_graphql_1.buildSchema)({
            resolvers: [
                carTypes_resolver_1.CarTypeResolver,
                car_resolver_1.CarResolver,
                piece_resolver_1.PieceResolver,
                maitenances_resolver_1.MaintenanceResolver,
                car_piece_association_resolver_1.CarPieceAssociation,
            ],
            emitSchemaFile: node_path_1.default.resolve(__dirname, '../../schemas/schema.gql'),
            validate: false
        });
        const server = new apollo_server_1.ApolloServer({
            schema,
        });
        const { url } = yield server.listen();
        (0, ConnectionMDB_1.default)()
            .then(() => {
            console.log(`Server running on ${url}`);
        })
            .catch(error => {
            console.log('Connection with database generated an error:\r\n');
            console.error(error);
            console.log('\r\nServer initialization cancelled');
        });
    });
}
main();
