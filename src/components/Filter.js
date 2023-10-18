import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
