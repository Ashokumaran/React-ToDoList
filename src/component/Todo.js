import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoStatus from "./TodoStatus";

function Todo() {
  const [todos, setTodos] = useState([]);

  //add todos
  const addTodo = (newtodo, priority) => {
    console.log(newtodo, priority);
    setTodos([
      ...todos,
      {
        name: newtodo,
        isDone: false,
        priorityStatus: priority,
      },
    ]);
  };
  
  //toggle completion status for todos
  const toggleTodo = (todoIndex) => {
    setTodos(
      todos.map((e, index) => {
        if (todoIndex === index) {
          return {
            ...e,
            isDone: !e.isDone,
          };
        }
        return e;
      })
    );
  };


  //delete todos
  const removeToDo = (todoIndex) => {
    setTodos(
      todos.filter((todo, index) => {
        return todoIndex != index;
      })
    );
  };
  window.todos=todos;

  return (
    <div className="mt-4 todo-design">
      <h1>What's the plan for today?</h1>
      <div className="row mt-4">
        <div className="col-6 current-todo">
          <TodoInput addTodo={addTodo} />
          <TodoList
            items={todos}
            toggleTodo={toggleTodo}
            removeToDo={removeToDo}
          />
        </div>
        <div className="col-6 current-todo">
            <TodoStatus items={todos}/>
        </div>
      </div>
    </div>
  );
}

export default Todo;
