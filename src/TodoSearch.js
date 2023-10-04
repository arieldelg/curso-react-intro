import React from 'react';
import './TodoSearch.css';

const TodoSearch = () => {
    return (
    <div className='divInput'>
        <input placeholder="Tareas" value={searchValue} onChange={
            (event) => {
                setSearchValue(event.target.value)
            }
        }/>
    </div>
    );
  }

  export {TodoSearch};