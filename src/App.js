import React from 'react';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

import TodoProvider from './Contexts/TodoContext';

function App() {

  return (
    <TodoProvider>
      <TodoList />
      <br />
      <hr />
      <br />
      <TodoAdd />
    </TodoProvider>
  );
}

export default App;
