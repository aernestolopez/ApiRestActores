"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActors = exports.updateActor = exports.getActor = exports.deleteActor = exports.addActor = void 0;
const addActor_interactor_1 = __importDefault(require("./addActor.interactor"));
const mySql_datasource_1 = __importDefault(require("../../dataSources/mySql.datasource"));
const deleteActor_interactor_1 = __importDefault(require("./deleteActor.interactor"));
const getActor_interactor_1 = __importDefault(require("./getActor.interactor"));
const updateActor_interactor_1 = __importDefault(require("./updateActor.interactor"));
const getActors_interactor_1 = __importDefault(require("./getActors.interactor"));
const ActorRepository = new mySql_datasource_1.default();
exports.addActor = (0, addActor_interactor_1.default)(ActorRepository);
exports.deleteActor = (0, deleteActor_interactor_1.default)(ActorRepository);
exports.getActor = (0, getActor_interactor_1.default)(ActorRepository);
exports.updateActor = (0, updateActor_interactor_1.default)(ActorRepository);
exports.getActors = (0, getActors_interactor_1.default)(ActorRepository);
