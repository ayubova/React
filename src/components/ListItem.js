import React from 'react';

export default function ListItem({ isEditing, task }) {
  // если в режиме редактирования, то делаем инпут, если нет - то ячейку таблицы со значением из списка задач
  return isEditing ? (
    <td>
      <input id="editInput" type="text" defaultValue={task} />
    </td>
  ) : (
    <td>{task}</td>
  );
}
