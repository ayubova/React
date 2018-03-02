import React from 'react';

export default function Button(props) {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
}
