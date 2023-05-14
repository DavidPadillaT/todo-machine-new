import { TodoCounter } from './components/atoms/TodoCounter/TodoCounter';
import { TodoCreateButton } from './components/atoms/TodoCreateButton/TodoCreateButton';
import { TodoSearch } from './components/atoms/TodoSearch/TodoSearch';
import { TodoList } from './components/molecules/TodoList/TodoList';
import { TodoItem } from './components/atoms/TodoItem/TodoItem';

import './App.css';

function App() {

  const defaultTodos = [
    { 
      text: 'Terminar curso de React',
      completed: false
    },
    { 
      text: 'Terminar curso de React 2',
      completed: false
    },
    { 
      text: 'Terminar curso de React 3',
      completed: false
    }
  ];

  return (
    <>
      <TodoCounter 
      completed={3}
      total={6}
      />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <TodoCreateButton />
    </>
  )
}

export default App
