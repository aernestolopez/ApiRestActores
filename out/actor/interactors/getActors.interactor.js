"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getActors = (ActorRepository) => () => {
    return ActorRepository.getActors();
};
exports.default = getActors;
