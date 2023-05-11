import "./Cell.css";

function Cell(props) {
  const { isOpen, openCell } = props;

  return <div className={isOpen ? "cell opened" : "cell"} onClick={openCell} />;
}

export default Cell;
