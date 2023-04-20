import React, {Fragment, useState} from 'react';

function Square({ value, onSquareClik }) {
  // value stores the value and setValue is a function that can be used to change the value.
  return (
    <button className="square" onClick={onSquareClik}>{value}</button>
  );

}
// this creates a component
// in React, a component is a piece of code that represents
// a resuable part of a user interface
// `export` makes this function available outside of this file
// The `default` keyword tells other files using your code that it’s the main function in your file.
function Board({ xIsNext, squares, onPlay }) {
  // <button> is a JSX element
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    // https://stackoverflow.com/questions/48316365/react-fragment-shorthand-failing-to-compile
    // <></> the shorthand won't work
    // => is an arrow function
    <Fragment>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClik={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClik={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClik={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClik={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClik={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClik={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClik={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClik={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClik={() => handleClick(8)} />
      </div>
    </Fragment>
  );
}

// we use the Game component as the top level component 
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    // ...history is enumerate all the items in history
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

