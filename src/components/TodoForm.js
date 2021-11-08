import React, { useState } from 'react';
import { uuid } from 'uuidv4';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  function hundleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function hundleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      // reset task input
      setTodo({ ...todo, task: '' });
    }
  }

  return (
    <form onSubmit={hundleSubmit}>
      <input
        name='task'
        type='text'
        value={todo.task}
        onChange={hundleTaskInputChange}
      />
      <button type='submit'>submit</button>
    </form>
  );
}

export default TodoForm;
