import ActorRepository from "../repositories/actorRepository"

const deleteActorInteractor = (ActorRepository: ActorRepository)=> (ActorId: Number):Promise<boolean> => {
    return ActorRepository.deleteActor(ActorId)
}
export default deleteActorInteractor