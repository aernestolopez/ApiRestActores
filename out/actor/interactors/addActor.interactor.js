"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addActorInteractor = (ActorRepository) => (ActorId, ActorName, ActorLastName, ActorCharacter, ActorLanguage) => {
    return ActorRepository.addActor(ActorId, ActorName, ActorLastName, ActorCharacter, ActorLanguage);
};
exports.default = addActorInteractor;
