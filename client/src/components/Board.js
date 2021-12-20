import './Board.css';
import { useState, useEffect } from 'react';
import Square from './Square.js';
import {Patterns} from '../Patterns.js'

export default function Board() {

  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState("X"); //X starts first
  const [result, setResult] = useState({winner: "none", state: "none"});

  useEffect(()=>{
    checkWin();
  }, [board]);

  const chooseSquare = (square) =>{
    setBoard(board.map((val, idx) => {
      if(idx === square && val === ""){
        return player
      }
      return val;
    }));

    if(player === "X"){
      setPlayer("O");
    }else if( player === "O"){
      setPlayer("X");
    }
  }

  const checkWin = ()=> {
    Patterns.forEach((currPattern)=> {
      const currPlayer = board[currPattern[0]];//Grab the player (X/O)
     
      if (currPlayer === "") return 
      let foundWinningPattern = true; //assuming we found a winning pattern

      currPattern.forEach((idx)=> {
        if(board[idx] !== currPlayer){
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern){
        setResult({winner: player, state: "won"})
      }

    } )
    
  }

    return (
      <div className="board">
        <div className='row'>
          <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}}/>
          <Square val={board[1]} chooseSquare={() => {chooseSquare(1)}}/>
          <Square val={board[2]} chooseSquare={() => {chooseSquare(2)}}/>
        </div>
        <div className='row'>
          <Square val={board[3]} chooseSquare={() => {chooseSquare(3)}}/>
          <Square val={board[4]} chooseSquare={() => {chooseSquare(4)}}/>
          <Square val={board[5]} chooseSquare={() => {chooseSquare(5)}}/>
        </div>
        <div className='row'>
          <Square val={board[6]} chooseSquare={() => {chooseSquare(6)}}/>
          <Square val={board[7]} chooseSquare={() => {chooseSquare(7)}}/>
          <Square val={board[8]} chooseSquare={() => {chooseSquare(8)}}/>
        </div>
      </div>
    );
  }
  
