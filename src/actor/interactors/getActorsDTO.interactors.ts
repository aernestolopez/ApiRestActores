import ActorDTO from "../entities/actorDTO";
import ActorRepository from "../repositories/actorRepository";

const getActorsDTO=(ActorRepository: ActorRepository)=>():Promise<ActorDTO[]>=>{
    return ActorRepository.getActorsDTO();
}
export default getActorsDTO;