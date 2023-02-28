/**
 * Declaracion de las rutas para el servidor de la api rest con express
 */

import express from 'express';
import { addActorHttp, deleteActorHttp, getActorHttp, getActorsHttp, updateActorHttp } from '../../controllers/actorHttp.controller';
const route= express.Router();

route.post('/addActor', addActorHttp);
route.delete('/deleteActor', deleteActorHttp);
route.put('/updateActor', updateActorHttp);
route.get('/getActor/:id', getActorHttp);
route.get('/getActors', getActorsHttp);

export default route;