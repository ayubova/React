import React from 'react';

export default function Input({ addTask, setInput, setPriority }) {
  return (
    <div>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Enter task"
        onChange={setInput}
      />
      Приоритет:
      <select id="priority" onChange={setPriority}>
        <option value="high">Высокий</option>
        <option value="middle">Средний</option>
        <option value="low">Низкий</option>
      </select>
      <button type="button" onClick={addTask} id="submit">
        Add
      </button>
    </div>
  );
}
