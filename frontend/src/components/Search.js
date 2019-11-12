import React from 'react';

const Search = (props) => {

  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={(e) => props.search(e)}
      />
    </div>
  );
}

export default Search;
