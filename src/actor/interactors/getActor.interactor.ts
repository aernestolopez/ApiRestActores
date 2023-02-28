import Actor from "../entities/actor";
import ActorRepository from "../repositories/actorRepository";

const getActor = (ActorRepository: ActorRepository)=> (ActorId: Number):Promise<Actor> => {
    return ActorRepository.getActor(ActorId)
}
export default getActor;