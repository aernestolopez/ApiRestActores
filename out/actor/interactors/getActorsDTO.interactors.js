"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getActorsDTO = (ActorRepository) => () => {
    return ActorRepository.getActorsDTO();
};
exports.default = getActorsDTO;
