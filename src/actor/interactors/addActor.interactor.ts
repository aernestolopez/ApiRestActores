/**
 * Creacion del actuador de añadir dispositivo
 * @author ernesto
 */
import ActorRepository from "../repositories/actorRepository"
const addActorInteractor = (ActorRepository: ActorRepository)=> (ActorId: Number, ActorName:String,ActorLastName:String, ActorCharacter:String, ActorLanguage:String):Promise<boolean> => {
    return ActorRepository.addActor(ActorId, ActorName, ActorLastName, ActorCharacter, ActorLanguage);
}
export default addActorInteractor