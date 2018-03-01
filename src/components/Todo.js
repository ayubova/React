import React from 'react';
import ListRow from './ListRow';
import ListHeader from './ListHeader';
import Input from './Input';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPriority: 'Высокий',
      input: '',
      tasks: [],
    };
    this.keyCounter = 0;
  }

  setInput = e => {
    this.setState({ input: e.target.value });
  };

  setPriority = e => {
    this.setState({
      selectedPriority: e.target.options[e.target.selectedIndex].textContent,
    });
  };

  getUniqueKey = () => {
    const newKey = this.keyCounter + 1;
    this.keyCounter = newKey;
    return newKey;
  };

  addTask = e => {
    this.setState({
      input: '',
      tasks: [
        ...this.state.tasks,
        {
          name: this.state.input,
          priority: this.state.selectedPriority,
          isFiltered: true,
        },
      ],
    });
    document.getElementById('task').value = '';
  };

  deleteTask = indexToDelete => {
    this.setState({
      tasks: this.state.tasks.filter((value, index) => index !== indexToDelete),
    });
  };

  saveEditedTask = (event, index) => {
    const newTasks = this.state.tasks;
    newTasks[index] = document.querySelector('#editInput').value;
    this.setState({ tasks: newTasks });
  };

  handleFilter = e => {
    const query = e.target.value.toLowerCase();
    const newTasks = this.state.tasks.map(task => ({
      ...task,
      isFiltered: task.name.toLowerCase().includes(query),
    }));
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <Input
          setInput={this.setInput}
          addTask={this.addTask}
          setPriority={this.setPriority}
        />
        <table>
          <ListHeader handleFilter={this.handleFilter} />
          <tbody>
            {this.state.tasks
              .filter(task => task.isFiltered)
              .map((task, index) => (
                <ListRow
                  key={`id${task.name}`}
                  task={task.name}
                  deleteTask={this.deleteTask}
                  saveEditedTask={this.saveEditedTask}
                  index={index}
                  getUniqueKey={this.getUniqueKey}
                  priority={task.priority}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
