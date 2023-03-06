/**
 * Interfaz para la implementacion de los metodos
 * @author ernesto
 */

import Actor from "../entities/actor";
import ActorDTO from "../entities/actorDTO";

export default interface ActorRepository{
    addActor(id: Number, name:String, lastName:String, character:String, idIdioma:Number):Promise<boolean>;
    deleteActor(id:Number):Promise<boolean>;
    getActor(id:Number):Promise<Actor>;
    getActors():Promise<Array<Actor>>;
    updateActor(id:Number, characterNew:String):Promise<boolean>;
    getActorsDTO():Promise<Array<ActorDTO>>;
}