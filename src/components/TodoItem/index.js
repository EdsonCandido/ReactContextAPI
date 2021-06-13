import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div>
      {todo.id} - {todo.title} - {todo.done ? "true" : "false"}
    </div>
  );
}

export default TodoItem;