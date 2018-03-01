import React from 'react';

export default function DeleteButton({ deleteTask }) {
  return (
    <td>
      <button onClick={deleteTask}>Delete</button>
    </td>
  );
}
