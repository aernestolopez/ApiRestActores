"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActorsDTOHTTP = exports.getActorsHttp = exports.getActorHttp = exports.updateActorHttp = exports.deleteActorHttp = exports.addActorHttp = void 0;
const interactor_1 = require("../actor/interactors/interactor");
const addActorHttp = (request, response) => {
    const { body } = request;
    const { actor } = body;
    const result = (0, interactor_1.addActor)(actor.id, actor.name, actor.lastname, actor.characterAc, actor.idIdioma);
    result.then(() => response.status(200).send()).catch(() => response.status(500).send());
};
exports.addActorHttp = addActorHttp;
const deleteActorHttp = (request, response) => {
    const { body } = request;
    const { actor } = body;
    const result = (0, interactor_1.deleteActor)(actor.id);
    result.then(() => response.status(200).send()).catch(() => response.status(500).send());
};
exports.deleteActorHttp = deleteActorHttp;
const updateActorHttp = (request, response) => {
    const { body } = request;
    const { actor } = body;
    const result = (0, interactor_1.updateActor)(actor.id, actor.characterNew);
    result.then(() => response.status(200).send()).catch(() => response.status(500).send());
};
exports.updateActorHttp = updateActorHttp;
const getActorHttp = (request, response) => {
    const id = request.params['id'];
    var y = +id;
    const result = (0, interactor_1.getActor)(y);
    result.then((resp) => response.json(resp)).catch(() => response.status(500).send());
};
exports.getActorHttp = getActorHttp;
const getActorsHttp = (_request, response) => {
    const result = (0, interactor_1.getActors)();
    result.then((resp) => response.json(resp)).catch(() => response.status(500).send());
};
exports.getActorsHttp = getActorsHttp;
const getActorsDTOHTTP = (_request, response) => {
    const result = (0, interactor_1.getActorsDTO)();
    result.then((resp) => response.json(resp)).catch(() => response.status(500).send());
};
exports.getActorsDTOHTTP = getActorsDTOHTTP;
