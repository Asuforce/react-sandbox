import { useState, useMemo } from 'react';

function Square({ value, onSquareClick, highlight }) {
  const className = highlight ? 'square highlight' : 'square';
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquare = squares.slice();
    nextSquare[i] = xIsNext ? "X" : "O";
    onPlay(nextSquare, i);
  }

  const winnerResult = useMemo(() => calculationWinner(squares), [squares]);
  const { winner, line } = winnerResult || { winner: null, line: [] };
  let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>
      {[...Array(3)].map((_, i) => (
        <div className="board-row" key={i}>
          {[...Array(3)].map((_, j) => {
            const index = i * 3 + j;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                highlight={line.includes(index)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), movePos: null }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);

  const xIsNext = currentMove % 2 == 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares, pos) {
    const nextHistory = [...history.slice(0, currentMove + 1), { squares: nextSquares, movePos: pos }];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((step, move) => {
    const { movePos } = step;
    const row = Math.floor(movePos / 3) + 1;
    const col = movePos % 3 + 1;
    let description = 'Go to game start';
    if (move == currentMove) {
      description = movePos !== null
        ? `You are at move #${move} (row: ${row}, col: ${col})`
        : `You are at move #${move}`;
    } else if (move > 0) {
      description = `Go to move #${move} (row: ${row}, col: ${col})`;
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  });

  if (!isAscending) {
    moves.reverse();
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={(nextSquares, pos) => handlePlay(nextSquares, pos)} />
      </div>
      <div className="game-info">
        <button onClick={() => setIsAscending(!isAscending)}>
          {isAscending ? 'Sort Descending' : 'Sort Ascending'}
        </button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculationWinner(squares) {
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

  const winningLine = lines.find(([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]);

  return winningLine ? { winner: squares[winningLine[0]], line: winningLine } : null;
}
