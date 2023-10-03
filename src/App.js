import {TodoList} from './TodoList';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreatTodoButton } from './CreatTodoButton';

const defaultTodos = [
  {text: 'Estudiar React', completed: false},
  {text: 'Comer', completed: false},
  {text: 'Desayunar', completed: false},
  {text: 'Descansar', completed: false}
]

const App = () => {
  return (
      <>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />

      <TodoList >
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreatTodoButton/>
      </> 
    
  );
}

export default App ;
