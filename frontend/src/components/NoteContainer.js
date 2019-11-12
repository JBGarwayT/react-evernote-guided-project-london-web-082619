import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import API from '../helper_methods/API'

class NoteContainer extends Component {

  state = {
    notes: [],
    selectedNote: '',
    searchTerms: ''
  }

  componentDidMount() {
    API.getNotes().then(data => this.setState({notes: data}))
  }

  selectNote = noteId => {
    this.setState ({
      selectedNote: noteId
    })
  }

  getSelectedNote = () => {
    const selectedId = this.state.selectedNote
    return this.state.notes.find(note => note.id === selectedId)
  }

  updateAPI = (id, body) => {
    API.updateNote(id, body)
    .then(data => this.setState({
      notes : this.state.notes.map(note => note.id === id ? data : note )
    }))
  }

  createNewNote = (e) => {
    const data = {
      title: "Please enter your title",
      body: "Please fill out some of your body",
      // user: {
      //   id: 3,
      //   name: "flatironschool"},
    }
    e.preventDefault()
    API.newNote(data)
    .then(data => this.setState({
      notes: [data, ...this.state.notes],
      selectedNote: data.id
    }))
  }

  searchState = (event) => {
    this.setState({
      searchTerms: event.target.value
    })
  }

  availableNotes= () => {
    if (this.state.searchTerms && this.state.searchTerms !== '')
      return this.state.notes.filter(note => note.title.toLocaleLowerCase().includes(this.state.searchTerms.toLocaleLowerCase()))
    else
      return this.state.notes
  }

  render() {
    return (
      <Fragment>
        <Search search={this.searchState} />
        <div className='container'>
          <Sidebar allNotes={this.availableNotes()} selectNote={this.selectNote} createNote={this.createNewNote}/>
          <Content note={this.getSelectedNote()} update={this.updateAPI}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
