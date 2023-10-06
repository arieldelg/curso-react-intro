import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

/*  const defaultTodos = [
  {text: 'Estudiar React', completed: true},
  {text: 'Comer', completed: false},
  {text: 'Desayunar', completed: false},
  {text: 'Descansar', completed: true},
  {text: 'Cenar', completed: false}
] 


localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))  */



const App = () => {
  const {
    item: todo,
    saveItem: saveTodos,
    error,
    loading,
    } = useLocalStorage('TODOS_V1', []);
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
    saveTodos(Arraytodo)
  }
  const deleteTodo = (text) => {
    const Arraytodo = [...todo]
    const index = Arraytodo.findIndex(element => {
      return element.text === text
    })
    Arraytodo.splice(index,1)
    saveTodos(Arraytodo)
    
    console.log(Arraytodo)
  }

  return (
      <AppUI
      loading={loading}
      error={error}
      completedTodo={completedTodo}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodo={searchedTodo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      />
  );
}

export default App ;
