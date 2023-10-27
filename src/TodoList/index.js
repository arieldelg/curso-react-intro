import React from "react";

const TodoList = ({ children, searchValue }) => {
    return (
        <ul className='todo-list'>
          {children}
        </ul>
    )
}

export {TodoList}