
import React from "react";
import { CheckComponent } from "./CheckComponent";
import { DeleteComponent } from "./DeleteComponent";

const TodoItem = ({ text, completed, done, deleteTodo }) => {
    return (
        <>
          <li className="list-">
            <CheckComponent completed={completed} done={done} />
            <p className={`todo-item ${completed && 'todo-item-complete'}`} >{text}</p>
            <DeleteComponent deleteTodo={deleteTodo}/>
          </li>  
        </>
    )
}

export {TodoItem}

