import ActorRepository from "../repositories/actorRepository";
const updateActorInteractor = (ActorRepository: ActorRepository)=> (ActorId: Number, uidNew:String):Promise<boolean> => {
    return ActorRepository.updateActor(ActorId, uidNew)
}
export default updateActorInteractor