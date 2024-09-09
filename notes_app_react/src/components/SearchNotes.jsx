import React, { useState } from 'react';

const SearchNotes = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <label>Search Notes:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter note title"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchNotes;
