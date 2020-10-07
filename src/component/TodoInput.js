import React, { useState } from "react";

function TodoInput(props) {
  //initizaling the input
  const [input, setInput] = useState("");
  const [priority,setPriority] = useState("LOW")

  const handleSubmit = (event) => {
    //prevent default submission
    event.preventDefault();

    //re-initialize the input
    setInput("");
  };

  //update input
  const updateInput = (event) => setInput(event.target.value);

  //add todo
  const submitClicked = () => {
    if (input) {
      props.addTodo(input,priority);
    }
    setInput("");
    setPriority("LOW")
  };

  return (
    <div className="input-section">
      <form className="todo-form mt-3  input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input form-control"
          onChange={updateInput}
        />
        <select className="ml-2 btn btn-sm btn-dark">
          <option value="low" onClick={()=> setPriority("LOW")}>LOW</option>
          <option value="mid" onClick={()=> setPriority("MID")}>MID</option>
          <option value="high" onClick={()=> setPriority("HIGH")}>HIGH</option>
        </select>
        <button
          className="btn ml-2 btn-sm btn-dark todo-button"
          onClick={submitClicked}
        >
          Add todo
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
