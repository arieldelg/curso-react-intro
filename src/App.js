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
  {text: 'Descansar', completed: true},
  {text: 'Cenar', completed: false}
]

const App = () => {
  const [todo, setTotalTodo] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios estan buscando ' + searchValue);

  const completedTodo = todo.filter(todos => !!todos.completed).length;
  const totalTodos = todo.length
  const searchedTodo = todo.filter(todos => {
    return todos.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  const completeTodo = (text) => {
    const Arraytodo = [...todo]
    const index = Arraytodo.findIndex(element => {
      return element.text === text
    })
    if (Arraytodo[index].completed === true) {
      Arraytodo[index].completed = false
    } else {
      Arraytodo[index].completed = true
    }
    setTotalTodo(Arraytodo)
  }

  const deleteTodo = (text) => {
    const Arraytodo = [...todo]
    const index = Arraytodo.findIndex(element => {
      return element.text === text
    })
    Arraytodo.splice(index,1)
    setTotalTodo(Arraytodo)
    console.log(Arraytodo)
  }

  return (
      <>
      <TodoCounter completed={completedTodo} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList >
        {searchedTodo.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)} 
          onDelete={() => deleteTodo (todo.text)}
          />
        ))}
      </TodoList>

      <CreatTodoButton/>
      </> 
    
  );
}

export default App ;
