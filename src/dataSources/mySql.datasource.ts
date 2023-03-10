/**
 * Creacion de la conexion a la base de datos y desarrollo de los metodos
 * @author ernesto
 */

import ActorRepository from "../actor/repositories/actorRepository";
import Actor from "../actor/entities/actor";
import mysql from "mysql";
import ActorDTO from "../actor/entities/actorDTO";

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'usuario',
    database : 'actors'
});
connection.connect();

//Actividad 3
export default class ActorSql implements ActorRepository{
    getActorsDTO(): Promise<ActorDTO[]> {
        return new Promise<ActorDTO[]>((resolve,reject)=>{
            connection.query(`SELECT * FROM actors INNER JOIN idioma ON actors.idIdioma=idioma.id`, function(error: any, results){
                if(error){
                    reject(false);
                    console.log(error)
                }
                console.log(results)
                let actors:ActorDTO[]=[];
                results.forEach((actor:any)=>{
                    actors.push({
                        id:actor.id,
                        name:actor.name,
                        lastName:actor.lastname,
                        character:actor.characterAc,
                        language:actor.language
                    });
                });
                resolve(actors);
                
            });
        });
    }
     addActor(id: Number, name: String, lastname: String, characterAc: String, idIdioma: Number): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query('INSERT INTO actors VALUES (?,?,?,?,?);',[id, name, lastname, characterAc,idIdioma], function (error){
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }
    deleteActor(id: Number): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query(`DELETE FROM actors WHERE id='${id}'`, function (error){
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }
    getActor(id: Number): Promise<Actor> {
        return new Promise<Actor>((resolve,reject)=>{
            connection.query(`SELECT * FROM actors WHERE id='${id}'`, function (error, results) {
                if (error){
                    reject(false);
                    console.log(error)
                }
                resolve({
                    id:results[0].id,
                    name:results[0].name,
                    lastName:results[0].lastname,
                    character:results[0].characterAc,
                    idILang:results[0].idIdioma
                });
            });
        });
    }
    getActors(): Promise<Actor[]> {
        return new Promise<Actor[]>((resolve,reject)=>{
            connection.query(`SELECT * FROM actors`, function(error: any, results){
                if(error){
                    reject(false);
                    console.log(error)
                }
                let actors:Actor[]=[];
                results.forEach((actor:any)=>{
                    actors.push({
                        id:actor.id,
                        name:actor.name,
                        lastName:actor.lastname,
                        character:actor.characterAc,
                        idILang:actor.idIdioma
                    });
                });
                resolve(actors);
                
            });
        });
    }
    updateActor(id: Number, characterNew: String): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query(`UPDATE actors SET characterAc='${characterNew}' WHERE id='${id}'`, function(error,results){
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }
    
}