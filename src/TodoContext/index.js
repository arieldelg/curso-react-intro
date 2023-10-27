import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

const TodoProvider = ({ children }) => {
        // todoCounter
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS-V1', [])
    const total = todos.length
    const completadas = todos.filter(todo => (
        todo.completed === true
    )).length
    // fin todoCounter
    // search
    const [searchValue, setSearchValue] = React.useState('')
    const search = (event) => {
        setSearchValue(event.target.value)
    }
        console.log(searchValue)
    const searchedTodo = todos.filter(todo => {
        return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    })
    // fin search
    // addTodo
    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos)
    }
    // fin addTodo
    // Todo complete and Todo Delete
    const done = (text) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex(todo => {
        return todo.text === text
        })
        if (newTodos[index].completed) {
        newTodos[index].completed = false
        } else {
        newTodos[index].completed = true
        }
        saveTodos(newTodos)
    } 
    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex(todos => {
        return todos.text === text
        })
        newTodos.splice(index, 1)
        saveTodos(newTodos)
    }
    // Fin Todo complete and Todo Delete
    // Modal
    const [openModal, setOpenModal] = React.useState(false)
    return(
        <TodoContext.Provider value={{
            todos,
            total, 
            completadas, 
            searchValue, 
            setSearchValue, 
            search, 
            deleteTodo, 
            done, 
            searchedTodo, 
            loading, 
            error,
            openModal, 
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}