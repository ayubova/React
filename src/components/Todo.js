import React from 'react';
import ListRow from './ListRow';
import Input from './Input';

export default class Todo   extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      tasks: [],
    };
    this.keyCounter = 0;
  }

  setInput = e => {
    this.setState({ input: e.target.value });
  };

  getUniqueKey = () => {
    const newKey = this.keyCounter + 1;
    this.keyCounter = newKey;
    return newKey;
  };

  addTask = e => {
    this.setState({
      input: '',
      tasks: [...this.state.tasks, this.state.input],
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

  render() {
    return (
      <div>
        <Input setInput={this.setInput} addTask={this.addTask} />
        <table>
          <tbody>
            {this.state.tasks.map((task, index) => (
              <ListRow
                key={`id${task}`}
                task={task}
                deleteTask={this.deleteTask}
                saveEditedTask={this.saveEditedTask}
                index={index}
                getUniqueKey={this.getUniqueKey}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

//import React from 'react';
// import ListRow from './ListRow';
// import Input from './Input';

// export default class extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       input: '',
//       tasks: [],
//     };

//   }

//   setInput = e => {
//     this.setState({ input: e.target.value });
//   };

//   addTask = e => {
//     e.preventDefault();
//     this.setState({
//       input: '',
//       tasks: [...this.state.tasks, this.state.input],
//     });
//     document.getElementById('task').value = '';
//   };

//   deleteTask = indexToDelete => {
//     this.setState({
//       tasks: this.state.tasks.filter((task, index) => index != indexToDelete),
//     });
//   };

//   saveEditedTask = (value, index) => {
//     // e.preventDefault();
//     // const indexOfTaskToEdit = e.target.parentNode.parentNode.getAttribute(
//     //   'value',
//     // );
//     // const newTask = document.getElementById(indexOfTaskToEdit).value;
//     const newTasks = this.state.tasks;
//     newTasks[index] = value;
//     this.setState({ tasks: newTasks });
//   };

//   render() {
//     return (
//       <div id="todoList">
//         <Input setInput={this.setInput} addTask={this.addTask} />
//         <table>
//           <tbody>
//             {this.state.tasks.map((task, index) => (
//               <ListRow
//                 task={task}
//                 deleteTask={this.deleteTask}
//                 saveEditedTask={this.saveEditedTask}
//                 index={index}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
