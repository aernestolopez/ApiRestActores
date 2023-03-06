"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addActorInteractor = (ActorRepository) => (ActorId, ActorName, ActorLastName, ActorCharacter, ActorIdLang) => {
    return ActorRepository.addActor(ActorId, ActorName, ActorLastName, ActorCharacter, ActorIdLang);
};
exports.default = addActorInteractor;
