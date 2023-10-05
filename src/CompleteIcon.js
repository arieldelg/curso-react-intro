import React from "react";
import { TodoIcon } from "./TodoIcon";


const CompleteIcon = ({completed, onComplete}) => {
    return (
        <TodoIcon
        type="complete"
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
        />
    );
}

export {CompleteIcon}