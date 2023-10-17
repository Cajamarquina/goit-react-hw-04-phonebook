import React from 'react';

const Filter = ({ filter, handleChange }) => {
  return (
    <input
      type="text"
      name="filter"
      placeholder="Find contacts by name"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;
