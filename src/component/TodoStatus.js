import React from "react";
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from "react-icons/fc";
import {GrStatusGood} from 'react-icons/gr'
import {RiErrorWarningFill,RiDeleteBin2Fill} from 'react-icons/ri'

function TodoStatus(props) {
  const lowPriorityToDos = props.items.filter((task, index) => {
    return task.priorityStatus.type.name == "FcLowPriority";
  }).length;
  const medPriorityToDos = props.items.filter((task, index) => {
    return task.priorityStatus.type.name == "FcMediumPriority";
  }).length;
  const highPriorityToDos = props.items.filter((task, index) => {
    return task.priorityStatus.type.name == "FcHighPriority";
  }).length;
  const completedTodos = props.items.filter((task, index) => {
    return (task.isDone == true)
  }).length;
  const incompleteTodos = props.items.filter((task, index) => {
    return (task.isDone == false)
  }).length;

  return (
    <div className="todo-status-appending mt-3">
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <button className="btn btn-sm btn-dark btn-size">
        <FcLowPriority /> Low 
            <span className="badge badge-light">{lowPriorityToDos}</span>
        </button>
        <button className="btn btn-sm btn-dark btn-size">
        <FcMediumPriority /> Mid
            <span className="badge badge-light">{medPriorityToDos}</span>
        </button>
        <button className="btn btn-sm btn-dark btn-size">
        <FcHighPriority /> High 
            <span className="badge badge-light">{highPriorityToDos}</span>
        </button>
        <div className="dropdown-divider"></div>
        <button className="btn btn-sm btn-success btn-size">
        <GrStatusGood /> Done 
            <span className="badge badge-light">{completedTodos}</span>
        </button>
        <button className="btn btn-sm btn-danger btn-size">
        <RiErrorWarningFill /> Pending 
            <span className="badge badge-light">{incompleteTodos}</span>
        </button>
      </div>  
    </div>
  );
}

export default TodoStatus;
