import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square({ value, onClick }) {

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

function Game() {

    const [ squares, setSquares ] = useState(Array(9).fill(null));

    function renderSquare(i) {
        return <Square
        value={squares[i]}
        onClick={() => {
            const nextSquares = squares.slice()
            nextSquares[i] = 'X'
            setSquares(nextSquares)
        }}
        />
    }

    return (
        <div className="container">
        <div className="game">
            <div className="game-board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            </div>
        </div>
        </div>
    )
  }
  
  ReactDOM.render(<Game />, document.getElementById("root"));