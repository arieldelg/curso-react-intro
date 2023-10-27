import React from "react";
import { TodoContext } from "../TodoContext";

const CreateButton = () => {
    const { setOpenModal, openModal } = React.useContext(TodoContext)
    const botonActivado = () => {
        return !openModal ? setOpenModal(true) : setOpenModal(false)
    }
    return (
        <>
            <button className="more-task" onClick={botonActivado}>+</button>
        </>
    )
}

export {CreateButton}