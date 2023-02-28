"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deleteActorInteractor = (ActorRepository) => (ActorId) => {
    return ActorRepository.deleteActor(ActorId);
};
exports.default = deleteActorInteractor;
