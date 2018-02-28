import React from 'react';

export default ({ isEditing, task, index }) =>
  // если в режиме редактирования, то делаем инпут, если нет - то ячейку таблицы со значением из списка задач
  isEditing ? (
    <td>
      <form>
        <input type="text" defaultValue={task} id={index} />
      </form>
    </td>
  ) : (
    <td>{task}</td>
  );
