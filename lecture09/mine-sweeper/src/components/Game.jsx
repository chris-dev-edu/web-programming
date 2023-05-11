import { useState } from "react";
import Board from "./Board";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import Timer from "./Timer";

function Game() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  return (
    <>
      <div>
        <StartButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <StopButton
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setSeconds={setSeconds}
        />
        <Timer
          isPlaying={isPlaying}
          seconds={seconds}
          setSeconds={setSeconds}
        />
      </div>
      {isPlaying && <Board />}
    </>
  );
}

export default Game;
