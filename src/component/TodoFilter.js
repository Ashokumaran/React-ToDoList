import React from 'react'

function TodoFilter(props) {
  return (
    <div className="mt-3  todo-filter-appending">
      {props.results.map((task,index) => {
       return (
        <ul class="list-group" key={index}>
          <li class="list-group-item">{task.name}</li>
        </ul>
       )
        })}
    </div>
  )
}


export default TodoFilter;
