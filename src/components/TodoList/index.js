import React, { useContext } from 'react';
import TodoItem from '../TodoItem';
import { TodoContext } from '../../Contexts/TodoContext';

const TodoList = () => {

  const context = useContext(TodoContext);

  const data = context.todos.map(todo => (
    <TodoItem key={todo.id} todo={todo} />
  ))
  return (
    <div>
      {data}
    </div>
  );
}

export default TodoList;