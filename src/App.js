import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/Todoitem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  // console.log("selectTodoList", selectTodoList);
  const todoList = useSelector(selectTodoList);
  console.log("TodoList", todoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => {
            return (
              <TodoItem
                key={item.id}
                done={item.done}
                id={item.id}
                name={item.item}
              />
            );
          })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
