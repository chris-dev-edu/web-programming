import "./StopButton.css";

function StopButton(props) {
  const { isPlaying, setIsPlaying, setSeconds } = props;
  const onClick = () => {
    setIsPlaying(false);
    setSeconds(0);
  };

  return (
    <button className="stop-button" disabled={!isPlaying} onClick={onClick}>
      Stop
    </button>
  );
}

export default StopButton;
