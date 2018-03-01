import React from 'react';

export default class ListHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <thead>
        <tr>
          <th>Приоритет</th>
          <th>Название</th>
          <th>
            <input
              type="text"
              placeholder="Поиск по названию"
              onKeyUp={this.props.handleFilter}
            />
          </th>
        </tr>
      </thead>
    );
  }
}
