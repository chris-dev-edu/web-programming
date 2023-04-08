import { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="App">
      <TodoItem
        number={1}
        todo={"React 학습하기"}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
    </div>
  );
}

export default App;
