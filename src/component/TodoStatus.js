import React,{Fragment} from "react";
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from "react-icons/fc";
import {GrStatusGood} from 'react-icons/gr'
import {RiErrorWarningFill} from 'react-icons/ri'

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


  const onClicker = (event) => {
    let filterValue = event.target.value;
    props.filterToDo(filterValue);
}

  return (
    <Fragment>
    <div className="todo-status-appending mt-3">
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <button className="btn btn-sm btn-dark btn-size"  value="low" onClick={onClicker}>
        <FcLowPriority /> Low 
            <span className="badge badge-light">{lowPriorityToDos}</span>
        </button>
        <button className="btn btn-sm btn-dark btn-size"  value="mid" onClick={onClicker}>
        <FcMediumPriority /> Mid
            <span className="badge badge-light">{medPriorityToDos}</span>
        </button>
        <button className="btn btn-sm btn-dark btn-size"  value="high" onClick={onClicker}>
        <FcHighPriority /> High 
            <span className="badge badge-light">{highPriorityToDos}</span>
        </button>
        <div className="dropdown-divider"></div>
        <button className="btn btn-sm btn-success btn-size"  value="done" onClick={onClicker}>
        <GrStatusGood /> Done 
            <span className="badge badge-light">{completedTodos}</span>
        </button>
        <button className="btn btn-sm btn-danger btn-size"  value="pending" onClick={onClicker}>
        <RiErrorWarningFill /> Pending 
            <span className="badge badge-light">{incompleteTodos}</span>
        </button>
      </div>  
    </div>
    </Fragment>
  );
}

export default TodoStatus;
