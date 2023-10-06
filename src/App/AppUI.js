import { TodoList } from '../TodoList';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreatTodoButton } from '../CreatTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

const AppUI = ({
    completedTodo,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodo,
    completeTodo,
    deleteTodo,
    loading,
    error,
}) => {
    return (
        <>
        <TodoCounter completed={completedTodo} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
  
        <TodoList >
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodo.length === 0) && <EmptyTodos/>}
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
    )
}

export {AppUI};