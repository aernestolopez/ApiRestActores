"use strict";
/**
 * Declaracion de las rutas para el servidor de la api rest con express
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const actorHttp_controller_1 = require("../../controllers/actorHttp.controller");
const route = express_1.default.Router();
route.post('/addActor', actorHttp_controller_1.addActorHttp);
route.delete('/deleteActor', actorHttp_controller_1.deleteActorHttp);
route.put('/updateActor', actorHttp_controller_1.updateActorHttp);
route.get('/getActor/:id', actorHttp_controller_1.getActorHttp);
route.get('/getActors', actorHttp_controller_1.getActorsHttp);
route.get('/getActorsDTO', actorHttp_controller_1.getActorsDTOHTTP);
exports.default = route;
