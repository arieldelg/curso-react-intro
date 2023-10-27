import React from "react";
import { TodoIcon } from "../TodoIcon";

const CheckComponent = ({completed, done}) => {
    return (
        <TodoIcon type={'completed'} color={completed ? 'green': 'gray'} done={done}/>
    )
}

export {CheckComponent}