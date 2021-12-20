import mongoose from 'mongoose';

 const playerSchema = new mongoose.Schema({
    playerName: String,
    numberOfWins: Number
});

export const Player = mongoose.model('Player', playerSchema);