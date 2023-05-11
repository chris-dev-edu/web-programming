import { useEffect } from "react";
import "./Timer.css";

function Timer(props) {
  const { isPlaying, seconds, setSeconds } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return <div className="timer">{seconds} seconds</div>;
}

export default Timer;
