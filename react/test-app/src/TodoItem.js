import "./TodoItem.css";

function TodoItem(props) {
  const { number, todo, isCompleted, setIsCompleted } = props;

  return (
    <div id="todo-container">
      <span id="todo-number">{number}</span>
      <input
        id="todo-checkbox"
        type="checkbox"
        checked={isCompleted}
        onChange={() => {
          setIsCompleted(!isCompleted);
        }}
      />
      <span id="todo-item">{todo}</span>
    </div>
  );
}

export default TodoItem;
