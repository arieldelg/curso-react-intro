
import React from "react"
import { TodoContext } from "../TodoContext"


const TodoCounter = () => {
  const {
    total, 
    completadas,
  } = React.useContext(TodoContext)
    return(
      <h1 className='title'>Ya completaste <strong>{completadas}</strong> de <strong>{total}</strong> Todos</h1>
    )
}

export {TodoCounter}
