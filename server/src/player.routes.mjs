import express from 'express';

import { addPlayer } from './player.servise.mjs';
import {getAllPlayers} from './player.servise.mjs';
import {getPlayer} from './player.servise.mjs';
import {deletPlayer} from './player.servise.mjs';

export const playerRouter = express.Router();

//Add player
playerRouter.post('/', async (req, res) => {
    try{
        res.send(await addPlayer(req.body));
    } catch(e) {
        res.status(400);
        res.send(e.message);
    }
});

//Get all players
playerRouter.get('/', async (req, res) => {
    try{
        res.send(await getAllPlayers(req.query));
    }catch(e){
        res.status(400);
        res.send(e.message);
    }
});

//Get single player
playerRouter.get('/:name', async (req, res)=>{
    res.send(await getPlayer(req.params.name));
})

//Delete player
playerRouter.delete('/:name', async (req, res)=>{
    res.send(await deletPlayer(req.params.name))
})