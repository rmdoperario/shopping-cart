import React from 'react';

const SearchBar = ({ filter, setFilter }) => (
  <input
    type="text"
    placeholder="Search products..."
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800"
  />
);

export default SearchBar;
