import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  state = {
    editingNote: ""
  }

  editNote = () => {
    this.setState({
      editingNote: this.props.note.id
    })
  }

  clearState = () => {
    this.setState({
      editingNote: ""
    })
  }

  renderContent = () => {
    if (this.state.editingNote && this.state.editingNote === this.props.note.id) {
      return <NoteEditor note={this.props.note} clickFunction={this.clearState} update={this.props.update}/>;
    } else if (this.props.note) {
      return <NoteViewer {...this.props.note} clickFunction={this.editNote}/>;
    } else {
      return <Instructions element={this.props.note}/>;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
