import React from 'react';

export default ({ addTask, setInput }) => (
  <form onSubmit={addTask}>
    <input
      type="text"
      name="task"
      id="task"
      placeholder="Enter task"
      onChange={setInput}
    />
    <button type="submit" id="submit">
      Add
    </button>
  </form>
);
