import React from 'react';

const NotesTable = ({ notes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, index) => (
          <tr key={index}>
            <td>{note.title}</td>
            <td>{note.description}</td>
            <td>{note.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NotesTable;
