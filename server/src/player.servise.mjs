//import Mongo from "mongodb";
import {Player} from '../db/Player.model.mjs';

//const { ObjectId } = Mongo;

export async function addPlayer(player){
    const newPlayer = new Player(player);
    return newPlayer.save();

}


export function getAllPlayers() {
    return Player.find();
  }

  export function getPlayer(playername) {
    return Player
        .findOne({ playerName: playername});
}

export async function deletPlayer(playername) {
    return Player.findOneAndDelete({ playerName: playername});
}