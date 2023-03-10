"use strict";
/**
 * Creacion de la conexion a la base de datos y desarrollo de los metodos
 * @author ernesto
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
let connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usuario',
    database: 'actors'
});
connection.connect();
//Actividad 3
class ActorSql {
    getActorsDTO() {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM actors INNER JOIN idioma ON actors.idIdioma=idioma.id`, function (error, results) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                console.log(results);
                let actors = [];
                results.forEach((actor) => {
                    actors.push({
                        id: actor.id,
                        name: actor.name,
                        lastName: actor.lastname,
                        character: actor.characterAc,
                        language: actor.language
                    });
                });
                resolve(actors);
            });
        });
    }
    addActor(id, name, lastname, characterAc, idIdioma) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO actors VALUES (?,?,?,?,?);', [id, name, lastname, characterAc, idIdioma], function (error) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    deleteActor(id) {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM actors WHERE id='${id}'`, function (error) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    getActor(id) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM actors WHERE id='${id}'`, function (error, results) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                resolve({
                    id: results[0].id,
                    name: results[0].name,
                    lastName: results[0].lastname,
                    character: results[0].characterAc,
                    idILang: results[0].idIdioma
                });
            });
        });
    }
    getActors() {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM actors`, function (error, results) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                let actors = [];
                results.forEach((actor) => {
                    actors.push({
                        id: actor.id,
                        name: actor.name,
                        lastName: actor.lastname,
                        character: actor.characterAc,
                        idILang: actor.idIdioma
                    });
                });
                resolve(actors);
            });
        });
    }
    updateActor(id, characterNew) {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE actors SET characterAc='${characterNew}' WHERE id='${id}'`, function (error, results) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
}
exports.default = ActorSql;
