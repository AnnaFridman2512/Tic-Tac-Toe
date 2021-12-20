import './Board.css';
import { useState, useEffect } from 'react';
import Square from './Square.js';
import {Patterns} from '../Patterns.js'

export default function Board() {

  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState("O"); //X starts first, but the useEffect changes it to O at first render, so we start with O and the useEffect will change it to X 
  const [result, setResult] = useState({winner: "none", state: "none"});

  useEffect(()=>{
    checkWin();
    checkIfTie();

    if(player === "X"){
      setPlayer("O");
    }else if( player === "O"){
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if(result.state !== "none"){//Only when someone won
      alert(`Game finished. player ${result.winner} won`);
    }

  }, [result])

  const chooseSquare = (square) =>{
    setBoard(board.map((val, idx) => {
      if(idx === square && val === ""){
        return player
      }
      return val;
    }));

  }

  const checkWin = ()=> {
    Patterns.forEach((currPattern)=> {
      const currPlayer = board[currPattern[0]];//Grab the player (X/O)
     
      if (currPlayer === "") return 
      let foundWinningPattern = true; //assuming we found a winning pattern

      currPattern.forEach((idx)=> {//Check if all the indexes written in the current pattern are filled with the same player
        if(board[idx] !== currPlayer){//And if they don't:
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern){//And if they are filled with the same player
        setResult({winner: player, state: "Won"})
      }
    } );
  }

  const checkIfTie = () => {
    let filled = true; //When all the squares are filled
    board.forEach((square)=> {
        if (square === ""){
          filled = false;
        }
    });

     if(filled){
      setResult({winner: "No One", state: "Tie"})
    }
  }

  const restartGame = () =>{
    setBoard(["","","","","","","","",""]);
    setPlayer("O");
  }

    return (
      <div className="container">
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
      <button onClick={restartGame}> RESET </button>
      </div>
    );
  }
  
