import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div id="todo-container">
      <span id="todo-number">{props.number}</span>
      <input
        id="todo-checkbox"
        type="checkbox"
        checked={props.isCompleted}
        onChange={() => {
          props.setIsCompleted(!props.isCompleted);
        }}
      />
      <span id="todo-item">{props.todo}</span>
    </div>
  );
}

export default TodoItem;
