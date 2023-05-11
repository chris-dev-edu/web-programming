import "./StartButton.css";

function StartButton(props) {
  const { isPlaying, setIsPlaying } = props;
  const onClick = () => {
    setIsPlaying(true);
    console.log(isPlaying);
  };

  return (
    <button className="start-button" disabled={isPlaying} onClick={onClick}>
      Start
    </button>
  );
}

export default StartButton;
