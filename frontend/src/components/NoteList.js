import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.allNotes.map(note => <NoteItem {...note} handleClick={() => props.handleClick(note.id)}/>)}
    </ul>
  );
}

export default NoteList;
