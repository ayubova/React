import React from 'react';

export default function Button({
  deleteTask,
  saveEditedTask,
  setEditState,
  isEditing,
  index,
  name,
}) {
  if (name === 'Deleted') {
    return (
      <td>
        <button onClick={deleteTask}>Delete</button>
      </td>
    );
  }
  if (name === 'Editing') {
    return isEditing ? (
      <td>
        <button
          type="button"
          onClick={e => {
            saveEditedTask(e, index);
            setEditState();
          }}
        >
          Save
        </button>
      </td>
    ) : (
      <td>
        <button type="button" onClick={setEditState}>
          Edit
        </button>
      </td>
    );
  }
}
