import React from 'react';

export default ({ deleteTask }) => (
  <td>
    <button onClick={deleteTask}>Delete</button>
  </td>
);
