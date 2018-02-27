import React from 'react';

export default ({ tasks, deleteTask }) => (
  <ul>
    {tasks.map((task, ind) => (
      <li value={task} key={ind}>
        {task}
        <button onClick={deleteTask}>Delete</button>
      </li>
    ))}
  </ul>
);
