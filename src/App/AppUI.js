import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateButton } from '../CreateButton';
import { LoadingSkeleton } from "../LoadingSkeleton";
import { ErrorSkeleton } from "../ErrorSkeleton";
import { EmptySkeleton } from "../EmptySkeleton";
import { TodoContext } from "../TodoContext";
import { FirstTodo } from "../FirstTodo";
import { Modal } from "../Modal";
import { CreateTodo } from "../CreateTodo";

const AppUI = () => {
  const {
    todos,
    deleteTodo, 
    done, 
    searchedTodo, 
    loading, 
    error,
    openModal, 
  } = React.useContext(TodoContext)
  return (
      <>
        <TodoCounter />
        <TodoSearch />
        <TodoList >
          {loading && 
          <>
          <LoadingSkeleton/>
          <LoadingSkeleton/>
          <LoadingSkeleton/>
          </>
          }
          {error && <ErrorSkeleton/>}
          {(!loading && searchedTodo.length === 0 && todos.length !== 0) && <EmptySkeleton/>}
          {(!loading && todos.length === 0) && <FirstTodo/>}
          {searchedTodo.map(todo => (
            <TodoItem text={todo.text} key={todo.text} completed={todo.completed} done={() => done(todo.text)} deleteTodo={() => deleteTodo(todo.text)}/>
          ))}
        </TodoList>
        <CreateButton />
        {openModal && 
        <Modal>
          <CreateTodo/>
        </Modal>
        }
      </>
    );
}

export {AppUI}