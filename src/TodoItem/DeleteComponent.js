import React from "react";
import { TodoIcon } from "../TodoIcon";

const DeleteComponent = ({ deleteTodo }) => {
    return (
        <TodoIcon type={'delete'} color='black' deleteTodo={deleteTodo}/>
    );
}

export {DeleteComponent}