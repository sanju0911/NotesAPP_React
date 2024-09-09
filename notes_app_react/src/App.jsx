import React, { useState } from 'react';
import './App.css';
import NoteForm from './components/NotesForm';
import NotesTable from './components/NotesTable';
import SearchNotes from './components/SearchNotes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
    setFilteredNotes([...notes, note]); // Updates both state lists
  };

  const handleSearch = (query) => {
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  return (
    <div className="app-container">
      <h1>Notes Application</h1>
      <NoteForm addNote={addNote} />
      <SearchNotes onSearch={handleSearch} />

      {/* Display number of books and number of books being displayed */}
      <div className="note-stats">
        <p>Number of notes: {notes.length}</p>
        <p>Displaying: {filteredNotes.length}</p>
      </div>

      {filteredNotes.length > 0 && <NotesTable notes={filteredNotes} />}
    </div>
  );
};

export default App;
