import React,{Fragment} from 'react'
import {FcLowPriority,FcMediumPriority,FcHighPriority} from 'react-icons/fc';
import {GrStatusGood} from 'react-icons/gr'
import {RiErrorWarningFill,RiDeleteBin2Fill} from 'react-icons/ri'

function TodoList(props) {
    return (
        <div>
                {props.items.map((task,index) => {
                    const onClicker = () => {
                        props.toggleTodo(index);
                }

                props.items.map((task,index) => {
                    if(task.priorityStatus=="LOW")
                    task.priorityStatus=<FcLowPriority />
                    else if(task.priorityStatus=="MID")
                    task.priorityStatus=<FcMediumPriority />
                    else if(task.priorityStatus=="HIGH")
                    task.priorityStatus=<FcHighPriority />
                })
                
                const removeToDo = () => {
                    props.removeToDo(index);
                }
                    return (
                        <div className="todo-list-appending" key={index}>
                        <div>
                            <span onClick={onClicker} className="float-left">{task.name}</span> <div className="icons float-right">{task.isDone? <GrStatusGood onClick={onClicker}/> : <RiErrorWarningFill onClick={onClicker}/>} {task.priorityStatus} <RiDeleteBin2Fill onClick={removeToDo} /> </div>
                        </div>
                        </div>
                        );
                })}
        </div>
    )
}
export default TodoList;
