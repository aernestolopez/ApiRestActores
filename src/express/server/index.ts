/**
 * Creacion del server de la api rest
 * @author ernesto
 */
import express from 'express';
import route from "../routes/route";
const app=express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(route);
const PORT = 1289;
app.listen(PORT, ()=> console.log(`Corriendo en ${PORT}`))