// filepath: g:\work\2025 Projects\Pannini-Educational\assignments\src\components\SearchFilter.jsx
import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  const handleSearch = () => {
    onSearch(searchTerm, filterBy);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
      <input
        type="text"
        placeholder="Search assignments"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2"
      />
      <select
        value={filterBy}
        onChange={(e) => setFilterBy(e.target.value)}
        className="w-full sm:w-1/4 p-2 border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2"
      >
        <option value="all">All</option>
        <option value="dueDate">Due Date</option>
        <option value="course">Course</option>
      </select>
      <button
        onClick={handleSearch}
        className="w-full sm:w-1/4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
