import ActorRepository from "../repositories/actorRepository";
const updateActorInteractor = (ActorRepository: ActorRepository)=> (ActorId: Number, characterNew:String):Promise<boolean> => {
    return ActorRepository.updateActor(ActorId, characterNew)
}
export default updateActorInteractor