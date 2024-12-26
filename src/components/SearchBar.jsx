import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search for food or restaurants"
        className="w-full px-4 py-3 rounded-full border-2 border-purple-300 focus:outline-none focus:border-purple-500 pl-12"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" size={20} />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
        Search
      </button>
    </div>
  );
};

export default SearchBar;