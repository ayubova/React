import React from 'react';

export default function Input({ addTask, setInput }) {
  return (
    <div>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Enter task"
        onChange={setInput}
      />
      <button type="button" onClick={addTask} id="submit">
        Add
      </button>
    </div>
  );
}
