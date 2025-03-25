import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';

const App = () => {
  const todos = useSelector((state) => state.todos);

  return (
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <footer>
          <p>Total Tasks: {todos.length}</p>
        </footer>
      </div>
  );
};

export default App;
