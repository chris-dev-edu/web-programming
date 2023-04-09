import { useState } from "react";
import TodoItem from "./TodoItem";
import WeatherItem from "./WeatherItem";
import { weathers } from "./data/weather";

const todoItems = [
  { number: 1, todo: "국어 공부하기", isCompleted: true },
  { number: 2, todo: "수학 공부하기", isCompleted: false },
  { number: 3, todo: "영어 공부하기", isCompleted: true },
  { number: 4, todo: "역사 공부하기", isCompleted: true },
  { number: 5, todo: "과학 공부하기", isCompleted: false },
  { number: 6, todo: "코딩 공부하기", isCompleted: false },
];

function App() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="App">
      {weathers.map(({ weather, date, highestTemp, lowestTemp }) => (
        <WeatherItem
          weather={weather}
          date={date}
          highestTemp={highestTemp}
          lowestTemp={lowestTemp}
        />
      ))}
      {todoItems.map(({ number, todo, isCompleted }) => (
        <TodoItem
          key={number}
          number={number}
          todo={todo}
          isCompleted={isCompleted}
        />
      ))}
    </div>
  );
}

export default App;
