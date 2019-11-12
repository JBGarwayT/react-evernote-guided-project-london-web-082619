import React from 'react';

const NoteItem = (props) => (
  <li onClick={props.handleClick}>
    <h2>{props.title}</h2>
    <p>{truncate(props.body)}</p>
  </li>
);

const truncate = (str) => (
  str.length > 50 ? str.substring(0, 50) + "..." : str
);

export default NoteItem;
