import React from 'react';

export default ({ saveEditedTask, setEditState, isEditing }) =>
  isEditing ? (
    <td>
      <button
        onClick={e => {
          saveEditedTask(e);
          setEditState();
        }}
      >
        Save
      </button>
    </td>
  ) : (
    <td>
      <button onClick={setEditState}>Edit</button>
    </td>
  );
