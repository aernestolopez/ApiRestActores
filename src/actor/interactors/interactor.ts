import addActorInteractor from "./addActor.interactor";
import ActorSql from "../../dataSources/mySql.datasource";
import deleteActorInteractor from "./deleteActor.interactor";
import getActorInteractor from "./getActor.interactor";
import updateActorInteractor from "./updateActor.interactor";
import getActorsInteractor from "./getActors.interactor";
import getActorsDTOInteractor from "./getActorsDTO.interactors";



const ActorRepository=new ActorSql();
export const addActor=addActorInteractor(ActorRepository);
export const deleteActor=deleteActorInteractor(ActorRepository);
export const getActor=getActorInteractor(ActorRepository);
export const updateActor=updateActorInteractor(ActorRepository);
export const getActors=getActorsInteractor(ActorRepository);
export const getActorsDTO=getActorsDTOInteractor(ActorRepository);