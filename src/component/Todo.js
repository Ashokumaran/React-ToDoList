import React, { useState } from "react";
import { FcRotateToLandscape } from "react-icons/fc";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoStatus from "./TodoStatus";

function Todo() {
  const [todos, setTodos] = useState([]);

  //add todos
  const addTodo = (newtodo, priority) => {
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
  const [result, setresult] = useState([]);
  window.todos = todos;

  const newToDo = todos;

  const filterToDo = (filter) => {
    setresult([]);
    if (filter == "low") {
      setresult(
        newToDo.filter((todo, index) => {
          return todo.priorityStatus.type.name == "FcLowPriority";
        })
      );
    } else if (filter == "mid") {
      setresult(
        newToDo.filter((todo, index) => {
          return todo.priorityStatus.type.name == "FcMediumPriority";
        })
      );
    } else if (filter == "high") {
      setresult(
        newToDo.filter((todo, index) => {
          return todo.priorityStatus.type.name == "FcHighPriority";
        })
      );
    } else if (filter == "done") {
      setresult(
        newToDo.filter((todo, index) => {
          return todo.isDone == true;
        })
      );
    } else if (filter == "pending") {
      setresult(
        newToDo.filter((todo, index) => {
          return todo.isDone == false;
        })
      );
    }
  };
  // const filterToDo = (filter) => {
  //     if(filter=="low"){
  //       result = newToDo.filter((todo, index) => {
  //       return todo.priorityStatus.type.name == "FcLowPriority";
  //     })}
  //     else if(filter=="mid"){
  //       result = newToDo.filter((todo, index) => {
  //       return todo.priorityStatus.type.name == "FcMediumPriority";
  //     })}
  //     else if(filter=="high"){
  //       result = newToDo.filter((todo, index) => {
  //       return todo.priorityStatus.type.name == "FcHighPriority";
  //     })}
  //     else if(filter=="done"){
  //       result = newToDo.filter((todo, index) => {
  //       return todo.isDone == true;
  //     })}
  //     else if(filter=="pending"){
  //       result = newToDo.filter((todo, index) => {
  //         return todo.isDone == false;
  //       })}

  //       result.map((e) => console.log(e.name))
  // }

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
          <TodoStatus items={todos} filterToDo={filterToDo} />
          <TodoFilter results={result} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
