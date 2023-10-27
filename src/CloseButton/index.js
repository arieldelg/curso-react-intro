import React from "react";
import { TodoContext } from "../TodoContext";

const CloseButton = () => {
    const {setOpenModal } = React.useContext(TodoContext)
    const closeCreateTodo = () => {
        return setOpenModal(false)
    }
    return(
        <button className="button-close" onClick={closeCreateTodo} type="button">Cerrar</button>
    )
}

export {CloseButton}