import React from 'react';
import ListItem from './listItem';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      tasks: [],
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ input: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      input: '',
      tasks: [...this.state.tasks, this.state.input],
    });
    document.getElementById('task').value = '';
  };

  deleteTask = e => {
    const taskToDelete = e.target.parentNode.getAttribute('value');
    this.setState({
      tasks: this.state.tasks.filter(task => task !== taskToDelete),
    });
  };

  render() {
    return (
      <div id="todoList">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter task"
            onChange={this.onChange}
          />
          <button type="submit" id="submit">
            Add
          </button>
        </form>
        <ListItem tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}
