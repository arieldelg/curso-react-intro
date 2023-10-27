import React from "react";
import { CloseButton } from "../CloseButton";
import { TodoContext } from "../TodoContext";

const CreateTodo = () => {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const  { addTodo, setOpenModal } = React.useContext(TodoContext)
    const todoValue = (event) => {
        console.log(event.target.value)
        return setNewTodoValue(event.target.value)
    }
    const saveNewTodo = () => {
        setOpenModal(false)
        addTodo(newTodoValue)
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
        }}>
            <p className="create-text">Crea tu primer Todo</p>
            <textarea placeholder="Escribe tu tarea" onChange={todoValue} className="text-area" value={newTodoValue}/>
            <div className="button-container">
                <CloseButton/>
                <button className="button-create" onClick={saveNewTodo} type="submit">Crear</button>
            </div>
        </form>
    );
}

export {CreateTodo}