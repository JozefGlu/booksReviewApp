import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <form className="flex items-center justify-evenly w-full py-2">
      <input
        type="text"
        placeholder="Search for a book"
        className="border border-black rounded px-1 w-4/6 sm:w-5/6 dark:bg-purple-700 dark:placeholder-black"
      />

      <button type="submit" className="border border-black rounded font-medium px-1 dark:bg-purple-700">
        Search
      </button>
    </form>
  );
};

export { SearchBar };
