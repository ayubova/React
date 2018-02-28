import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import ListItem from './ListItem';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false, //режим редактирования по умолчанию устанавливаем false
    };
  }

  setEditState = () => {
    //обработчик события при нажатии на кнопку Edit меняет режим редактирования
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    // формируем строку списка (компоненты: ячейка с задачей и кнопки)
    return (
      <tr value={this.props.index} key={this.props.index}>
        <ListItem
          task={this.props.task}
          isEditing={this.state.isEditing}
          index={this.props.index}
        />
        <DeleteButton deleteTask={this.props.deleteTask} />
        <EditButton
          saveEditedTask={this.props.saveEditedTask}
          setEditState={this.setEditState}
          isEditing={this.state.isEditing}
        />
      </tr>
    );
  }
}
