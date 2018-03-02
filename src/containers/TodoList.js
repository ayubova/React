import React from 'react';
import TextBox from '../components/TextBox';
import TodoListItem from './TodoListItem';
import Radio from '../components/Radio';
import types from '../constants';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: undefined,
      radio: undefined,
    };
  }

  render() {
    const { radio, search } = this.state;
    const todos =
      search || radio
        ? this.props.todos.filter(
            todo =>
              todo.text.includes(search || '') &&
              todo.type.includes(radio || ''),
          )
        : this.props.todos;
    const { onChangeTodo, onDeleteTodo } = this.props;
    return (
      <div>
        Поиск
        <TextBox
          value={this.state.search}
          onChange={value => this.setState({ search: value })}
        />
        <Radio
          options={types}
          onChange={value => this.setState({ radio: value })}
        />
        {todos.map((todo, index) => {
          return (
            <TodoListItem
              onChangeTodo={onChangeTodo}
              onDeleteTodo={() => onDeleteTodo(index)}
              key={`${todo.type}${todo.text}${index}`}
              todo={todo}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}
