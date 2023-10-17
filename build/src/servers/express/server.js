"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const ConnectionMDB_1 = __importDefault(require("../../mongo/model/ConnectionMDB"));
dotenv_1.default.config();
const PORT = Number(process.env.PORT) || 8080;
(0, ConnectionMDB_1.default)()
    .then(() => app_1.default.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
}))
    .catch(error => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
});
