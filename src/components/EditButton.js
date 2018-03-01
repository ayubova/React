import React from 'react';

export default function EditButton({
  saveEditedTask,
  setEditState,
  isEditing,
  index,
}) {
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
