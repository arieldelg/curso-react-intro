import React from 'react';
import './TodoCounter.css'

const TodoCounter = ({completed, total}) => {
    return (
      <h1>
        Has completado {completed} de {total} toDos
      </h1>
    )
  }

  export {TodoCounter};