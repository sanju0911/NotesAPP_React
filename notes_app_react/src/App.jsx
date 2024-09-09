import React, { useState } from 'react';
import './App.css';
import NoteForm from './components/NotesForm';
import NotesTable from './components/NotesTable';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="app-container">
      <h1>Notes Application</h1>
      <NoteForm addNote={addNote} />
      {notes.length > 0 && <NotesTable notes={notes} />}
    </div>
  );
};

export default App;
