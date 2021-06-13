import React, { useContext, useState } from 'react';

import { TodoContext } from '../../Contexts/TodoContext';

const TodoAdd = () => {

  const { saveTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState();

  const handleFormSubmit = event => {
    event.preventDefault();

    saveTodo(todo);
  }
  const handleInputChange = event => {
    setTodo({
      ...todo,
      title: event.target.value,
    });
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="title" id="title" placeholder="new Task" onChange={handleInputChange} />
      <button> Add Task</button>
    </form>
  );
}

export default TodoAdd;