import Actor from "../entities/actor";
import ActorRepository from "../repositories/actorRepository";

const getActors=(ActorRepository: ActorRepository)=>():Promise<Actor[]>=>{
    return ActorRepository.getActors();
}
export default getActors;