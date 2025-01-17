import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList allNotes={this.props.allNotes} handleClick={this.props.selectNote}/>
        <button onClick={(e) => this.props.createNote(e)}>New</button>
      </div>
    );
  }
}

export default Sidebar;
