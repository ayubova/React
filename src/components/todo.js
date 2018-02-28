import React from 'react';
import ListRow from './ListRow';
import Input from './Input';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      tasks: [],
    };
  }

  setInput = e => {
    this.setState({ input: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
    this.setState({
      input: '',
      tasks: [...this.state.tasks, this.state.input],
    });
    document.getElementById('task').value = '';
  };

  deleteTask = e => {
    e.preventDefault();
    const indexOfTaskToDelete = e.target.parentNode.parentNode.getAttribute(
      'value',
    );
    this.setState({
      tasks: this.state.tasks.filter(
        (task, index) => index != indexOfTaskToDelete,
      ),
    });
  };

  saveEditedTask = e => {
    e.preventDefault();
    const indexOfTaskToEdit = e.target.parentNode.parentNode.getAttribute(
      'value',
    );
    const newTask = document.getElementById(indexOfTaskToEdit).value;
    const newTasks = this.state.tasks;
    newTasks[indexOfTaskToEdit] = newTask;
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div id="todoList">
        <Input setInput={this.setInput} addTask={this.addTask} />
        <table>
          <tbody>
            {this.state.tasks.map((task, ind) => (
              <ListRow
                task={task}
                deleteTask={this.deleteTask}
                saveEditedTask={this.saveEditedTask}
                index={ind}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
