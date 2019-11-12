import React, { Component } from 'react';
// import API from '../helper_methods/API'

class NoteEditor extends Component {

  state = {
    title: "",
    body: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount(){
    this.setState({
      body: this.props.note.body,
      title: this.props.note.title,
    })
  }

  handleSubmit = (e, note_id, bodyObject) => {
    e.preventDefault(),

    this.props.update(note_id, bodyObject),

    this.props.clickFunction()
  }

  render() {
    const note_id = this.props.note.id
    const bodyObject = {
      title: this.state.title, 
      body: this.state.body, 
      // user_id: this.props.note.user.id}
    }
    return (
      <div className="note-editor-div">
        <form onSubmit={(e) => this.handleSubmit(e, note_id, bodyObject)} 
        className="note-editor">
          <input type="text" name="title" defaultValue={this.props.note.title} onChange={this.handleChange}/>
          <textarea name="body" defaultValue={this.props.note.body} onChange={this.handleChange}/>
          <div className="button-row">
            <input className="button" type="submit" value="Save" />
            <button type="button" onClick={() => this.props.clickFunction()}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteEditor;
