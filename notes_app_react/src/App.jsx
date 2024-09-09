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
      {filteredNotes.length > 0 && <NotesTable notes={filteredNotes} />}
    </div>
  );
};

export default App;
