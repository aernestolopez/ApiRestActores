"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateActorInteractor = (ActorRepository) => (ActorId, characterNew) => {
    return ActorRepository.updateActor(ActorId, characterNew);
};
exports.default = updateActorInteractor;
