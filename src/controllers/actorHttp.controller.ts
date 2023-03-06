
import {addActor, deleteActor, updateActor, getActor, getActors, getActorsDTO} from '../actor/interactors/interactor';
import { Request, Response, request} from "express";

export const addActorHttp=(request: Request, response: Response)=>{
    const { body }=request;
    const { actor } =body;
    const result=addActor(actor.id, actor.name, actor.lastname, actor.characterAc, actor.idIdioma);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send());
}
export const deleteActorHttp=(request: Request, response:Response)=>{
    const { body }=request;
    const { actor }=body;
    const result=deleteActor(actor.id);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send())
}
export const updateActorHttp=(request:Request, response:Response)=>{
    const { body }=request;
    const { actor }=body;
    const result=updateActor(actor.id, actor.characterNew)
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send());
}
export const getActorHttp=(request:Request, response:Response)=>{
    const id=request.params['id'];
    var y: number = +id;
    const result=getActor(y);
    result.then((resp)=>response.json(resp)).catch(()=>response.status(500).send());
}
export const getActorsHttp=(_request:Request, response:Response)=>{
    const result=getActors();
    result.then((resp)=>response.json(resp)).catch(()=>response.status(500).send());
}
export const getActorsDTOHTTP=(_request:Request, response:Response)=>{
    const result=getActorsDTO();
    result.then((resp)=>response.json(resp)).catch(()=>response.status(500).send());
}