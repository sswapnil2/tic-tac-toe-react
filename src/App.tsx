import React, { useRef, useEffect } from 'react';
import './App.css';
import { Symbol } from './enums/symbols';
import Game from './game';
import HumanPlayer from './player/HumanPlayer';
import SimpleWinnerStrategy from './winnerStratergy/SimpleWinnerStratergy';

function App() {

  let game = useRef(new Game(new HumanPlayer(Symbol.X), new HumanPlayer(Symbol.O), 3, new SimpleWinnerStrategy()));

  useEffect(() => {
    game.current.run();
  }, [])

  const onBlockClick = (x: number, y: number) => {
    alert(`Clicked on: ", ${x}, ${y}`)
  }


  return (
    <div className="container-md">
      <div className="text-center mt-2 mb-3">
        <h1>Welcome to tic Tac Toe</h1>
      </div>
      <div className="text-center">
      {
        game.current.getBoard().map((r, idx) => (
          <div className="row" key={`${idx}`} >
            {r.map((c, j) => (
              <div className="column block" key={`${c}${j}`} onClick={() => onBlockClick(idx, j)}>
                <span>{c === -1 ? "" : c}</span>
              </div>
            ))}
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
