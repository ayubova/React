import React from 'react';

export default function Radio(props) {
  const { onChange, options } = props;
  return (
    <div>
      {options.map(item => {
        return (
          <span key={item.value}>
            <input
              type="radio"
              name="todoType"
              value={item.value}
              onChange={() => onChange(item.label)}
            />{' '}
            {item.label}
          </span>
        );
      })}
      <span key={Math.random() * 100}>
        <input
          type="radio"
          name="todoType"
          value="all"
          onChange={() => onChange()}
        />{' '}
        Все
      </span>
    </div>
  );
}
