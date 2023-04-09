<!-- prettier-ignore -->
<!-- prettier-ignore-start-->

# Lecture 06.

## 01. React 환경설정

- NodeJS 설치: [링크](https://nodejs.org/ko/download)

```bash
node -v # NodeJS 버전 확인
```

- create-react-app 설치

```bash
npx create-react-app
```

- create-react-app 으로 React 프로젝트 생성

```bash
# npx create-react-app [프로젝트 이름]
npx create-react-app todo-app
```

- React app 실행

```bash
# 프로젝트 디렉토리로 이동 후
npm start
```

## 02. React 기본 개념

### React란?

- 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리
- `Component`라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성

### Component란?

- React App을 구성하는 가장 작은 블록

### React App 초기화 하기

- App > src 내의 `App.js`와 `index.js` 파일을 제외하고 모두 삭제

#### index.js

- 메인 프로그램, HTML과 Javascript 코드를 조합하여 웹 브라우저에 구현

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### App.js

- Component를 정의하는 프로그램, 실제로 웹브라우저 화면에 표시되는 내용을 정의

```jsx
function App() {
  return <div className="App">This is React App</div>;
}

export default App;
```

### Component 만들어보기

#### TodoItem.js

```jsx
function TodoItem() {
  return (
    <div>
      <span>number</span>
      <input type="checkbox" />
      <span>해야할 일</span>
    </div>
  );
}

export default TodoItem;
```

### Component를 App에 넣어보기

```jsx
import TodoItem from "./TodoItem";

function App() {
  return (
    <div className="App">
      <TodoItem />
    </div>
  );
}

export default App;
```

### Props란?

- Properties의 줄임말
- 상위 Component(Parent Component)에서 하위 Component(Child Component)로 값을 전달할 때 사용
- Props는 수정할 수 없음 (하위 Component에선 읽기 전용 데이터)

#### TodoItem.js에 Props 추가

```jsx
function TodoItem(props) {
  return (
    <div>
      <span>{props.number}</span>
      <input type="checkbox" checked={props.isCompleted} />
      <span>{props.todo}</span>
    </div>
  );
}

export default TodoItem;
```

#### App.js에서 Props 전달

```jsx
import TodoItem from "./TodoItem";

function App() {
  return (
    <div className="App">
      <TodoItem number={1} todo={"React 학습하기"} isCompleted={true} />
    </div>
  );
}

export default App;
```

### React Component에 CSS 적용하기
- React Component마다 CSS를 적용 가능
- CSS를 적용하기 위해서 CSS import 필요

#### TodoItem.js
```jsx
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div id="todo-container">
      <span id="todo-number">{props.number}</span>
      <input id="todo-checkbox" type="checkbox" checked={props.isCompleted} />
      <span id="todo-item">{props.todo}</span>
    </div>
  );
}

export default TodoItem;
```

#### TodoItem.css
```jsx
#todo-container {
  padding: 5px;
  border: 1px solid black;
}

#todo-number {
  border: 1px solid blue;
}

#todo-checkbox {
  accent-color: red;
}

#todo-item {
  background-color: yellow;
}
```

### State란?
- React Component 내에서 데이터 정보를 정의하고, 수정할 수 있도록 해주는 기능

아래 예시처럼 사용
```jsx
import { useState } from 'react'

const [state, setState] = useState(초기값)
```

#### App.js
```jsx
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
```

#### TodiItem.js
```jsx
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
```

## 실습
- todo-app/data/weather.js 의 weathers 데이터와 todo-app/images 내 이미지를 활용하여 일주일의 날씨를 Component로 표현하기


<!-- prettier-ignore-end-->
