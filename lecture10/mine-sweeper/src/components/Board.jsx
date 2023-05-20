import { useState } from "react";

import Cell from "./Cell";
import "./Board.css";

function Board() {
  const rows = 9;
  const cols = 9;
  const [grid, setGrid] = useState(() => {
    const initialGrid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false));
    return initialGrid;
  });

  const openCell = (row, col) => {
    const newGrid = [...grid];
    console.log(newGrid);
    newGrid[row][col] = true;
    console.log(newGrid);
    setGrid(newGrid);
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
              openCell={() => openCell(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
