import { useEffect, useState } from "react";

import Cell from "./Cell";
import "./Board.css";

const NEXT_POS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function Board(props) {
  const { isPlaying, setIsPlaying, seconds, setSeconds } = props;
  const rows = 9;
  const cols = 9;
  const numOfMine = 10;

  const [isGameOver, setIsGameOver] = useState(false);

  const [grid, setGrid] = useState(() => {
    const initialGrid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false));
    return initialGrid;
  });

  const [mine, setMine] = useState(() => {
    const initialGrid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(0));
    return initialGrid;
  });

  const [flag, setFlag] = useState(() => {
    const initialGrid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false));
    return initialGrid;
  });

  const clickRight = (row, col) => {
    if (grid[row][col]) return;
    const newFlag = [...flag];
    newFlag[row][col] = !newFlag[row][col];
    setFlag(newFlag);
  };

  const isComplete = () => {
    let openCount = 0;
    grid.forEach((rows) =>
      rows.forEach((cell) => {
        if (cell) openCount += 1;
      })
    );
    return openCount;
  };

  const initializeMine = () => {
    const mineIndex = new Set();

    while (mineIndex.size < numOfMine) {
      mineIndex.add(parseInt((Math.random() * 100000) % 81));
    }

    mineIndex.forEach((index) => {
      const row = parseInt(index / 9);
      const col = index % 9;
      addMine(row, col);
    });
    console.log(mine);
  };

  useEffect(() => {
    initializeMine();
  }, []);

  useEffect(() => {
    if (isGameOver) {
      setIsPlaying(false);
      setSeconds(0);
      setTimeout(() => {
        alert("GAME OVER!!");
      }, 2000);
    }
  }, [isGameOver]);

  const openCell = (row, col, click) => {
    if (!isPlaying || grid[row][col] || flag[row][col]) return;

    const newGrid = [...grid];
    newGrid[row][col] = true;
    setGrid(newGrid);

    if (mine[row][col] === -1) {
      setIsGameOver(true);
    } else if (click) {
      NEXT_POS.forEach((pos) => {
        const next_row = row + pos[0];
        const next_col = col + pos[1];

        if (checkRange(next_row, next_col)) {
          openCell(next_row, next_col);
          if (mine[next_row][next_col] === 0) {
            openCell(next_row, next_col, true);
          }
        }
      });
    }

    if (isComplete() === rows * cols - numOfMine) {
      setIsPlaying(false);
      alert(`COMPLETE: ${seconds}`);
    }
  };

  const checkRange = (row, col) => {
    return (
      0 <= row && row < rows && 0 <= col && col < cols && mine[row][col] !== -1
    );
  };

  const addOneToMine = (row, col) => {
    const newMine = [...mine];
    newMine[row][col] += 1;
    setMine(newMine);
  };

  const addMine = (row, col) => {
    NEXT_POS.forEach((pos) => {
      const next_row = row + pos[0];
      const next_col = col + pos[1];
      if (checkRange(next_row, next_col)) {
        addOneToMine(next_row, next_col);
      }
    });
    const newMine = [...mine];
    newMine[row][col] = -1;
    setMine(newMine);
  };

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell}`}
              isOpen={grid[rowIndex][colIndex]}
              isMine={mine[rowIndex][colIndex]}
              isFlag={flag[rowIndex][colIndex]}
              openCell={() =>
                openCell(rowIndex, colIndex, mine[rowIndex][colIndex] === 0)
              }
              clickRight={() => clickRight(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
