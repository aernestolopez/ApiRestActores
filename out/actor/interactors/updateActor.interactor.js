"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateActorInteractor = (ActorRepository) => (ActorId, uidNew) => {
    return ActorRepository.updateActor(ActorId, uidNew);
};
exports.default = updateActorInteractor;
