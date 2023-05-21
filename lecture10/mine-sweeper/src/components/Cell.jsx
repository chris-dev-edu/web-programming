import "./Cell.css";

function Cell(props) {
  const { isOpen, isFlag, openCell, isMine, clickRight } = props;

  return (
    <div
      className={
        isFlag
          ? "cell flag"
          : isOpen
          ? isMine === -1
            ? "cell opened mine"
            : "cell opened"
          : "cell"
      }
      onClick={openCell}
      onContextMenu={(e) => {
        e.preventDefault();
        clickRight();
      }}
    >
      {isOpen && isMine !== -1 ? isMine : ""}
    </div>
  );
}

export default Cell;
