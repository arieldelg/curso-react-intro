import React from 'react';
import {TodoList} from './TodoList';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreatTodoButton } from './CreatTodoButton';

const defaultTodos = [
  {text: 'Estudiar React', completed: true},
  {text: 'Comer', completed: false},
  {text: 'Desayunar', completed: false},
  {text: 'Descansar', completed: true}
]

const App = () => {
  const [searchValue, setSearchValue] = React.useState('')
  console.log('los usuarios estan buscando ' + searchValue)
  return (
      <>
      <TodoCounter completed={16} total={20} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList >
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreatTodoButton/>
      </> 
    
  );
}

export default App ;
