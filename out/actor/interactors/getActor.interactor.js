"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getActor = (ActorRepository) => (ActorId) => {
    return ActorRepository.getActor(ActorId);
};
exports.default = getActor;
